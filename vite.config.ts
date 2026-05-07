import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { allRoutes } from './src/seoConfig'

export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    // Pre-render every URL in your allRoutes list at build time.
    // This creates a static HTML file for each page so Google
    // can read your full content without executing JavaScript.
    includedRoutes: () => allRoutes,
    script: 'async',
    formatting: 'minify',
  },
})
