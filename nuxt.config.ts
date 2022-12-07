export default defineNuxtConfig({
  css: [
    "assets/scss/themes/dark/app-dark.scss",
    "assets/scss/app.scss",
    "assets/scss/iconly.scss",
  ],
  
  plugins: [
    { src: '~/plugins/bootstrap.client', mode: 'client' },
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classPrefix: 'theme-',
    classSuffix: ''
  },
  googleFonts: {
    families: {
      'Nunito': true,
    },
  },
})
