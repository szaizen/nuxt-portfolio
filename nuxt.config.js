
require('dotenv').config()
const { API_PATH_QIITA,GAID } = process.env

export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s | ポートフォリオサイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    'reset-css',
    'swiper/dist/css/swiper.css',
    '~/assets/scss/style.scss'
  ],
  plugins: [
    { src: '~plugins/vue-awesome-swiper', ssr: false }
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-gtag',
      {
        id: GAID,
        debug: true
      }
    ]
  ],
  styleResources: {
    scss: ['~/assets/scss/_variables.scss']
  },
  axios: {
  },
  generate: {
	  fallback: true
  },
  env: {
    API_PATH_QIITA
  }
}
