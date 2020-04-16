const bodyParser = require('body-parser')
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'blue' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/utopia.css',
    '@/assets/css/flaticon/flaticon.css',
    '@/assets/css/reset.css',
    '@/assets/css/style.css',
    '@/assets/css/responsive.css'
  ],
  script: [
    { src: 'https://kit.fontawesome.com/475a188618.js', crossorigin: 'anonymous' }
  ],
  plugins: [{ src: '~plugins/vue-carousel.js', ssr: false, mode: 'client' },
    { src: '~plugins/deneme.js', ssr: false, mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  router: {
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@neneos/nuxt-animate.css',
    '@nuxtjs/axios'
  ],
  axios: { // burda da ax,os ,ile ilgili öz
    baseURL: 'http://localhost:3000/api'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {}
  },
  serverMiddleware: [
    bodyParser.json(),
    '~api'
  ]
}
