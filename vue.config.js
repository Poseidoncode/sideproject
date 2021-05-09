module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sideproject/'
    : '/',
  devServer: {
      // proxy: "https://openapi.taifex.com.tw/",
      proxy: "https://mis.twse.com.tw/stock/",
      port: 80,
      open: process.platform === "darwin",
    },
}