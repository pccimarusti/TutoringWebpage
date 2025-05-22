// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    emptyOutDir: true,
    minify: 'esbuild',
    target: 'esnext',
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress specific warnings
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
        }
        warn(warning)
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    proxy: {
      // This will suppress the API error messages in development
      '^/sections': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: () => '/'
      }
    }
  },
  preview: {
    port: 4173,
    host: true
  }
})