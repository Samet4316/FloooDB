module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
  configureWebpack: {
    devServer: {
      // TODO: 
      proxy: {
        "^/api": {
          target: "https://jsonplaceholder.typicode.com",
          pathRewrite: {
            "^/api": ""
          },
          changeOrigin: true,
          logLevel: "debug"
        }
      },
      clientLogLevel: "info",
      watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: ["node_modules", "dist", ".nodevenv"]
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/main.scss";`
      }
    }
  }
};
