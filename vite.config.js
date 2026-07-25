import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        about: './pages/about.html',
        produk: './pages/produk.html',
        portfolio: './pages/portfolio.html',
        contact: './pages/contact.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
