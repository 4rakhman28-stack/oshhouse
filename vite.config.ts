import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const isGithubPages = process.env.GITHUB_PAGES === 'true'

// https://vite.dev/config/
export default defineConfig({
  base: isGithubPages ? '/oshhouse/' : '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'icon.svg',
        'apple-touch-icon-180x180.png',
      ],
      manifest: {
        name: 'OshHouse — Узбекская кухня',
        short_name: 'OshHouse',
        description:
          'Заказ аутентичной узбекской кухни с доставкой. Плов, шашлык, манты и выпечка из тандыра.',
        theme_color: '#c45c26',
        background_color: '#faf6f0',
        display: 'standalone',
        orientation: 'portrait',
        scope: isGithubPages ? '/oshhouse/' : '/',
        start_url: isGithubPages ? '/oshhouse/' : '/',
        lang: 'ru',
        categories: ['food', 'shopping'],
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}'],
        navigateFallback: 'index.html',
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
  preview: {
    host: true,
    port: 4173,
  },
})
