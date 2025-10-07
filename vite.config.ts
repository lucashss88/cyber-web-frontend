import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react(), tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      // Proxy removido - usando URLs diretas nos .env
    },
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development'
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_ENVIRONMENT)
    }
  }
})
