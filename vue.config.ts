module.exports = {
  configureWebpack: {
    devServer: {
      clientLogLevel: 'info',
      watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: ['node_modules', 'dist'],
      }
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/main.scss";`,
      },
    },
  },
}