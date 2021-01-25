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
    menu: menu.get('./src/pages'),
    article_list: menu.get('./src/pages/lp-articles')
  },
  generateEtags: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false
}
