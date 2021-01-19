const menu = require('./src/utils/menu.js')

module.exports = {
  // webpack: (config, { defaultLoaders }) => {
  //   config.module.rules.push({
  //     test: /\.scss$|\.css$/,
  //     use: [
  //       defaultLoaders.babel,
  //       {
  //         loader: require('styled-jsx/webpack').loader,
  //         options: {
  //           // type: "scoped"
  //           type: 'global'
  //         }
  //       },
  //       'sass-loader'
  //     ]
  //   })

  //   return config
  // },
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
}
