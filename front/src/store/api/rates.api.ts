import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:3000';

interface CurrencyData {
  merchant: Record<string, string> | null;
  history: Array<{
    timestamp: number;
    merchant: Record<string, string> | null;
  }>;
}

export interface RatesCacheResponse {
  [currency: string]: CurrencyData;
}

export interface RateHistoryItem {
  timestamp: number;
  merchant: string | null;
}


export interface RateItem {
  code: string;               // валютный код, например "BTC"
  value: number;              // текущий курс USD, преобразованный из priceInUSD
  prevValue: number;          // предыдущий курс для сравнения
  history: RateHistoryItem[]; // история курсов для графика
}

export const ratesApi = createApi({
  reducerPath: 'ratesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getRates: builder.query<RateItem[], void>({
      query: () => '/api/usd-rates',
      transformResponse: (
        response: { changed: boolean; data: RatesCacheResponse }
      ): RateItem[] => {
        if (!response.changed) return [];

        const data = response.data;
        const result: RateItem[] = [];

        for (const code in data) {
          const merchantData = data[code].merchant;
          if (!merchantData?.USD) continue;

          const value = parseFloat(merchantData.USD);
          const rawHistory = data[code].history.map(h => ({
            timestamp: h.timestamp,
            merchant: h.merchant?.USD ?? null,
          }));

          const seen = new Set<string | null>();
          const filteredHistory = rawHistory.filter(h => {
            if (seen.has(h.merchant)) return false;
            seen.add(h.merchant);
            return true;
          });

          let prevValue = value;

          if (filteredHistory.length >= 2) {
            const prev = filteredHistory[filteredHistory.length - 2].merchant;
            const parsed = parseFloat(prev || '');
            prevValue = isNaN(parsed) ? value : parsed;
          } else if (filteredHistory.length === 1 && filteredHistory[0].merchant) {
            const parsed = parseFloat(filteredHistory[0].merchant);
            prevValue = isNaN(parsed) ? value : parsed;
          }

          result.push({
            code,
            value,
            prevValue,
            history: filteredHistory,
          });
        }
        return result;
      }
    }),
    getConvertRate: builder.query<number, { from: string; to: string }>({
      query: ({
        from,
        to
      }) => `https://api.coingate.com/v2/rates/merchant/${from}/${to}`,
      transformResponse: (res: string) => {
        const parsed = parseFloat(res);
        if (isNaN(parsed)) {
          throw new Error('Invalid response from CoinGate');
        }
        return parsed;
      },
    }),
  }),
});

export const {
  useGetRatesQuery,
  useGetConvertRateQuery,
} = ratesApi;
