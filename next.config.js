const withPreact = (next = {}) =>
  Object.assign({}, next, {
    webpack(config, options) {
      const { dev, isServer } = options

      // Use Preact only in client production bundle.
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom': 'preact/compat',
          'create-react-class': 'preact-compat/lib/create-react-class',
          'react-dom-factories': 'preact-compat/lib/react-dom-factories'
        })
      }

      if (typeof next.webpack === 'function') {
        return next.webpack(config, options)
      }

      return config
    }
  })

const menu = require('./src/utils/menu.js')

module.exports = withPreact({
  env: {
    SECRET_COOKIE_PASSWORD: process.env.SECRET_COOKIE_PASSWORD,
    // Firebase setup
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN: process.env.FIREBASE_AUTHDOMAIN,
    FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
    FIREBASE_STORAGEBUCKET: process.env.FIREBASE_STORAGEBUCKET,
    FIREBASE_MESSAGINGSENDERID: process.env.FIREBASE_MESSAGINGSENDERID,
    FIREBASE_APPID: process.env.FIREBASE_APPID,
    FIREBASE_MEASUREMENTID: process.env.FIREBASE_MEASUREMENTID,
    // menu and static page generate
    menu: menu.get('./src/pages'),
    article_list: menu.get('./src/pages/lp-articles')
  },
  generateEtags: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false
})
