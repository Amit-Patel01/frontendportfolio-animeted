import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'https://my-portfolio-animated.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/contact': {
        target: process.env.VITE_API_URL || 'https://my-portfolio-animated.onrender.com',
        changeOrigin: true,
      },
    },
  },
})
