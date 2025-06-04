import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

let ratesCache = {}
let lastUpdated = 0
const FETCH_INTERVAL = 30 * 1000

let lastResetDate = new Date().toDateString()

function shouldResetCache() {
	const today = new Date().toDateString()
	return today !== lastResetDate
}

function isValueChanged(oldValue, newValue) {
	if (oldValue == null || newValue == null) return true

	return Number(parseFloat(oldValue)) !== Number(parseFloat(newValue))
}

function isMerchantChanged(oldMerchant, newMerchant) {
	if (!oldMerchant || !newMerchant) return true

	for (const [fiat, newRate] of Object.entries(newMerchant)) {
		const oldRate = oldMerchant[fiat]
		if (isValueChanged(oldRate, newRate)) {
			return true;
		}
	}
	return false
}

async function fetchAndUpdateRates() {

	try {
		if (shouldResetCache()) {
			ratesCache = {}
			lastResetDate = new Date().toDateString()
			console.log('Full cache reset at 00:00')
		}

		const response = await fetch('https://api.coingate.com/api/v2/rates')
		if (!response.ok) {
			console.error('Error from CoinGate API:', response.status)
			return
		}
		const data = await response.json()
		const now = Date.now()

		let somethingChanged = false

		const currencies = new Set([
			...Object.keys(data.merchant || {}),
		])

		for (const currency of currencies) {
			const newMerchant = data.merchant?.[currency] ?? null
			const existing = ratesCache[currency]
			const now = Date.now()

			if (!existing) {
				ratesCache[currency] = {
					merchant: newMerchant,
					prev: null,
					history: [{
						timestamp: now,
						merchant: newMerchant,
					}]
				}
				somethingChanged = true
				continue
			}

			const valueChanged = isMerchantChanged(existing.merchant, newMerchant)

			if (valueChanged) {
				ratesCache[currency] = {
					merchant: newMerchant,
					prev: existing.merchant,
					history: [
						...existing.history,
						{
							timestamp: now,
							merchant: newMerchant,
						}
					]
				}
				somethingChanged = true
			}
		}

		if (somethingChanged) {
			lastUpdated = now
			console.log(`Updated courses in ${new Date(now).toLocaleTimeString()}`)
		}
	} catch (err) {
		console.error('Error while retrieving data:', err)
	}
}

setInterval(fetchAndUpdateRates, FETCH_INTERVAL)
fetchAndUpdateRates()

app.use(cors())
app.disable('etag');

app.use((req, res, next) => {
	res.setHeader('Cache-Control', 'no-store');
	next();
});
app.get('/api/usd-rates', (req, res) => {
	const clientTimestamp = parseInt(req.query.since || '0')

	if (clientTimestamp >= lastUpdated) {
		return res.json({ changed: false })
	}

	const updatedData = {}
	const dayAgo = Date.now() - 24 * 60 * 60 * 1000

	for (const [currency, info] of Object.entries(ratesCache)) {
		const recentHistory = info.history.filter(h => h.timestamp >= dayAgo)

		if (recentHistory.length) {
			updatedData[currency] = {
				merchant: info.merchant,
				trader: info.trader,
				prev: info.prev || null,
				history: recentHistory
			}
		}
	}

	res.json({
		changed: true,
		lastUpdated,
		data: updatedData
	})
})


app.listen(PORT, () => {
	console.log(`Proxy сервер запущен на http://localhost:${PORT}`)
});
