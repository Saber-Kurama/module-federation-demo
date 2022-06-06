const { defineConfig } = require('@vue/cli-service')
const {ModuleFederationPlugin} = require("webpack").container;
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // static: {
    //   directory: path.join(__dirname),
    // },
    // compress: true,
    // port: 5001,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  chainWebpack: (config) => {
    // console.log('configureWebpack', config.plugins.get('html'));
    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //   .tap((options) => {
    //     return {
    //       ...options,
    //       refSugar: true
    //     };
    //   });
    // config.plugin('html').tap(args => {
    //   args[0].scriptLoading = 'module'
    //   return [...args]
    // });
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "home",
        filename: "remoteEntry.js",
        // library: {type: 'module'},
        exposes: {
          // "./Content": "./src/components/Content",
          // "./Button": "./src/components/Button",
        },
        remotes: {
          layout: "layout@http://localhost:5002/assets/remoteEntry.js",
        },
        // remoteType:'module',
        // shared: {
        //   vue: {
        //     // singleton: true,
        //     // import: false,
        //     requiredVersion: '^3.0.0'
        //   }
        // }
      }),
    ]
  }
})
