# Currency Converter

Приложение для отображения и конвертации криптовалютных и фиатных курсов в реальном времени с использованием CoinGate API.

## 📁 Структура проекта

```
currency-converter/
├── front/                # Клиентская часть (Vite + React + TypeScript)
│   ├── src/              # Исходники фронта
│   ├── public/           # Публичные файлы
│   ├── index.html        # Точка входа
│   └── vite.config.ts    # Конфигурация Vite
├── coingate-proxy/       # Сервер-прокси на Express
│   └── server.js         # Основной серверный код
├── package.json          # Главный package.json (если используем общий workspace)
└── README.md             # Документация
```

---

## 🚀 Установка и запуск

### 1. Клонировать репозиторий

```bash
git clone <your-repo-url>
cd currency-converter
```

### 2. Установить зависимости

```bash
cd front && npm install
cd ../coingate-proxy && npm install
```

### 3. Запуск (фронт и сервер одновременно)

Установите глобально `concurrently`, если его нет:

```bash
npm install -g concurrently
```

Создайте в корне `start-all.js` (или используйте отдельный `package.json`) со скриптом:

```json
// package.json в корне
{
  "name": "currency-converter-root",
  "private": true,
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix front\" \"npm start --prefix coingate-proxy\""
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}
```

Запустить:

```bash
npm install
npm run dev
```

> 📌 Убедитесь, что порт 3000 (сервер) и 5173 (фронт) свободны.

---

## 🧪 Использование флага `--disable-web-security`

Для разработки можно использовать прямые запросы к CoinGate API, если запустить браузер с отключённой CORS-защитой.

### Пример для macOS:

```bash
open -na "Google Chrome" --args --disable-web-security --user-data-dir="/tmp/chrome-dev"
```

> ⚠️ Использовать только в целях локальной разработки.

---

## 📦 Используемые технологии

### Фронтенд:

* React 19
* React Router
* Redux Toolkit + RTK Query
* Styled Components
* Recharts
* React Hook Form + Yup
* Vite + TypeScript

### Бэкенд:

* Node.js
* Express
* node-fetch
* CORS

---
