module.exports = {
  devServer: {
    open: true,
    proxy: {
      '': {
        target: 'http://localhost:3300',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
