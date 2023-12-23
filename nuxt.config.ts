// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'th',
        file: 'th.json'
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'th'
  },
})
