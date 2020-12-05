module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/v1': {
        target: 'https://music.taihe.com/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
