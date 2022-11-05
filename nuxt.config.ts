export default defineNuxtConfig({
  css: [
    "assets/scss/app.scss",
    "assets/scss/iconly.scss",
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
