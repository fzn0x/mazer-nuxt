import shrinkRay from 'shrink-ray-current'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  loading: {
    color: 'blue',
    height: '3px',
    duration: 5000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mazer-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mazer Nuxt - Nuxt Version of Mazer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/bootstrap.scss",
    "~/assets/scss/app.scss",
    "~/assets/scss/icons.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src : '~/plugins/vue-apexcharts.js', ssr : false },
    { src : '~/plugins/bootstrap.js', ssr : false },
    { src : '~/plugins/toastify.js', ssr : false },
    { src : '~/plugins/rater.js', ssr : false },
    { src : '~/plugins/perfect-scrollbar.js', ssr : false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-purgecss',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/google-fonts'
  ],

  optimizedImages: {
    optimizeImages: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-lazy-load',
    '@nuxtjs/axios',
    '@nuxtjs/component-cache',
    'vue-sweetalert2/nuxt'
  ],

  axios: {
    // extra config e.g
    // BaseURL: 'https://link-to-API'
  },
  //...axiosConfig

  googleFonts: {
    families: {
     'Nunito': true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {
      const vueLoader = config.module.rules.find(
        rule => rule.loader === "vue-loader"
      );
    }
  },
  
  render: {
    compressor: shrinkRay()
  },
}
