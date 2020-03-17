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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: '//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css', rel: 'stylesheet', id: 'bootstrap-css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css',
    '@/assets/css/media.css',
    '@/assets/css/flaticon/flaticon.css',
    'bootstrap-css-only/css/bootstrap.min.css',
    'mdbvue/lib/css/mdb.min.css'
  ],
  script: [
    { src: '//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js' },
    { src: '//code.jquery.com/jquery-1.11.1.min.js' },
    { src: 'https://kit.fontawesome.com/475a188618.js', crossorigin: 'anonymous' }
  ],
  plugins: [
    { src: '~/plugins/jquery.min.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {},
    transpile: [
      'mdbvue/lib/components'
    ]
  },
  serverMiddleware: [
    bodyParser.json(),
    '~api'
  ]
}
