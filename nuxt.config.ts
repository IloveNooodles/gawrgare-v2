// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      title: 'mgarebaldhie.me',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    // baseURL: "https://mgarebaldhie.me",
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: { enabled: true },
  css: ['~/assets/scss/reset.scss', '~/assets/scss/index.scss', '~/assets/scss/themes.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *; @use "~/assets/scss/_mixins.scss" as *; @use "~/assets/scss/_variables.scss" as *;',
        }
      }
    }
  },
  i18n: {
    baseUrl: "https://mgarebaldhie.me",
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'ja', language: 'ja-JP' },
      { code: 'id', language: 'id-ID' }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false
  },
  modules: ['@nuxtjs/seo', '@nuxtjs/i18n', '@nuxt/icon', '@vueuse/nuxt']
})
