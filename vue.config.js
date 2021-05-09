module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sideproject/'
    : '/',
  devServer: {
      proxy: "https://openapi.taifex.com.tw/",
      port: 80,
      open: process.platform === "darwin",
    },
}