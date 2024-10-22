// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      title: 'mgarebaldhie.me',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth"
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/scss/reset.scss', '~/assets/scss/index.scss', '~/assets/scss/themes.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as colors; @use "~/assets/scss/_mixins.scss" as mixins;',
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
    detectBrowserLanguage: {
      redirectOn: "root",
      useCookie: true,
    }
  },
  modules: ['@nuxtjs/seo', '@nuxtjs/i18n', '@nuxt/icon', '@vueuse/nuxt']
})
