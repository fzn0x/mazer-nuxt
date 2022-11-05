import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: [
    "~/assets/scss/bootstrap.scss",
    "~/assets/scss/app.scss",
    "~/assets/scss/icons.scss"
  ],
  ssr: false,
  modules: [
  ],
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Nunito': true
    }
  }
})
