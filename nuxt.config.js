import serverRoutes from './server'

console.log(`NODE_ENV: ${process.env.NODE_ENV}, APP_ENV: ${process.env.APP_ENV}`)

// When in local development, get the environment config from .env file
if (process.env.NODE_ENV === 'development') require('dotenv').config()

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
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/reset.css',
    '@/assets/styles.scss'
  ],
  styleResources: {
    scss: [
      '~/assets/_mixins.scss',
      '~/assets/_variables.scss',
      '~/assets/_animations.scss'
    ]
  },
  /*
  ** Basic Authentication for dev instances
  */
  basic: {
    name: 'dev',
    pass: 'password',
    enabled: process.env.BASIC_AUTH === 'enabled'
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
    APP_ENV: process.env.APP_ENV,
    API_URL: process.env.API_URL,
    APP_VERSION: process.env.APP_VERSION
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-basic-auth-module'
  ],
  serverMiddleware: [
    ...serverRoutes
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
