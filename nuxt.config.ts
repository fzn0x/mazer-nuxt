export default defineNuxtConfig({
  css: [
    "assets/scss/app.scss",
    "assets/scss/iconly.scss",
  ],
  modules: [
    '@pinia/nuxt',
  ],
  buildModules: [
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Nunito': true,
    },
  },
})
