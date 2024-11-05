// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@vaxee/nuxt',
    '@nuxt/fonts',
    'nuxt-workers'
  ],
  css: [
    '@unocss/reset/tailwind.css',
    'assets/styles/app.styl'
  ],
  components: {
    dirs: [
      {
        path: 'components',
        pathPrefix: false
      }
    ]
  },
  fonts: {
    assets: {
      prefix: '/_fonts/'
    },
    families: [
      { name: 'Nunito', provider: 'bunny' },
    ]
  },
  ssr: false,
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ],
    },
    rootAttrs: {
      class: `size-full`
    }
  },
  experimental: {
    viewTransition: true,
    clientFallback: true,
    cookieStore: true,
    clientNodeCompat: true
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  future: {
    compatibilityVersion: 4
  }
})
