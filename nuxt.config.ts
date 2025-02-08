// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    'nuxt-icon'],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      bucketUrl: process.env.BUCKET_URL,
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  experimental: {
    crossOriginPrefetch: true
  },
  nitro: {
    compressPublicAssets: true
  },
  vite: {
    css: {
      devSourcemap: true
    }
  }
})
