module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sideproject/'
    : '/',
  devServer: {
      proxy: "https://tw.rter.info/",
      port: 80,
      open: process.platform === "darwin",
    },
}