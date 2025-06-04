import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

const host = process.env.HOST || '127.0.0.1'

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host,
    port: 5173,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
