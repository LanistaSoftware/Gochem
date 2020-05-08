const bodyParser = require('body-parser')
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', type: 'text/css', href: '@/assets/css/style.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'green',
    height: '2px',
    throttle: 0
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/utopia.css',
    '@/assets/css/flaticon/flaticon.css',
    '@/assets/css/reset.css',
    '@/assets/css/style.css',
    '@/assets/css/loading.css',
    '@/assets/css/responsive.css'
  ],
  script: [
    { src: 'https://kit.fontawesome.com/475a188618.js', crossorigin: 'anonymous' }
  ],
  plugins: [{ src: '~plugins/vue-carousel.js', ssr: false, mode: 'client' }
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
    '@nuxtjs/proxy',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@neneos/nuxt-animate.css',
    '@nuxtjs/axios',
    'nuxt-user-agent'
  ],
  axios: { // burda da ax,os ,ile ilgili öz
    baseURL: 'http://localhost:3000/api',
    proxy: true
  },
  proxy: {
    '/api/': { target: 'http://localhost:3000/api/', pathRewrite: { '^/api/': '' }, changeOrigin: true }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          test: /\.(js|vue)$/
        })
      }
    }
  },
  serverMiddleware: [
    bodyParser.json(),
    '~api'
  ]
}
