import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');
  const url = env.VITE_API_URL || 'http://localhost:5000';

  return {
    plugins: [react()],
    envDir: '../',
    server: {
      host: '0.0.0.0', // Esto permite conexiones externas
      port: 5173,
      allowedHosts: ['elessartinuviel.duckdns.org'],
      proxy: {
        '/api': {
        target: url,
        changeOrigin: true,
        },
        '/vc': {
          target: url,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/vc/, '/api/proxy/vc-get'),
        }
      }
    }
  }
})
