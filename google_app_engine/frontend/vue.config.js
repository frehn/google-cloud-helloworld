module.exports = {
  devServer: {
    proxy: {
      '^/backend': {
        target: 'http://localhost:8081'
      }
    }
  }
}
