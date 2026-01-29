// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Enable SSG (Static Site Generation)
  ssr: true,
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/seo'
  ],

  // App Configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Solergy - Solar Energy Solutions in Bihar | Hajipur',
      meta: [
        { name: 'description', content: 'Leading solar energy provider in Bihar offering residential and commercial solar solutions, water heaters, UPS, and inverters. Get ₹78,000 PM Surya Ghar subsidy.' },
        { name: 'keywords', content: 'solar energy Bihar, solar panels Hajipur, PM Surya Ghar, solar water heater, UPS inverter, renewable energy' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  // Nuxt Image Configuration
  image: {
    quality: 80,
    formats: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // Tailwind CSS Configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false
  }
})
