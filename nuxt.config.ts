export default defineNuxtConfig({
  css: [
    "assets/scss/app.scss",
    "assets/scss/themes/dark/app-dark.scss",
    "assets/scss/iconly.scss",
  ],
  plugins: [
    { src: '~/plugins/bootstrap.client', mode: 'client' },
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
