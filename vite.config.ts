import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  root: 'playground',
  base: isProd ? '/veloracss/playground/' : '/',
  publicDir: resolve(__dirname, 'dist'),
  plugins: [react()],
  server: {
    port: 5173,
    watch: {
      include: ['playground/**', 'dist/**']
    }
  },
  build: {
    outDir: resolve(__dirname, 'playground-dist'),
    emptyOutDir: true,
  }
})
