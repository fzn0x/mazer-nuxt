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
    'nuxt-progress',
  ],
  progress: {
    // Default: 2px
    height: '5px',
    // Default: #29D
    color: '#29D',
    // NProgress options: https://www.npmjs.com/package/nprogress#configuration
    options: {
      showSpinner: true
    }
  },
  buildModules: [
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Nunito': true,
    },
  },
})
