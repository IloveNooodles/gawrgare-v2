// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
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
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'ja', iso: 'ja-JP' },
      { code: 'id', iso: 'id-ID' }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  modules: ['@nuxtjs/seo', '@nuxtjs/i18n', '@nuxt/icon']
})
