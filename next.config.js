module.exports = {
  env: {
    WP_API_URL: process.env.WP_API_URL,
    IMG_OPT_URL: process.env.IMG_OPT_URL,
    SECRET_COOKIE_PASSWORD: process.env.SECRET_COOKIE_PASSWORD,
    APPHOST: process.env.APPHOST,
    S3_URL: process.env.S3_URL
  },
  generateEtags: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false
}
