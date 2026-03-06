import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  root: 'playground',
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
