import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: '../',
  server: {
    host: '0.0.0.0', // Esto permite conexiones externas
    port: 5173,
    allowedHosts: ['elessartinuviel.duckdns.org'],
    proxy: {
      '/api': {
      target: 'http://127.0.0.1:5000',
      changeOrigin: true,
      },
      '/vc': {
        target: 'http://127.0.0.1:5000/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/vc/, '/api/proxy/vc-get'),
      }
    }
  }
})
