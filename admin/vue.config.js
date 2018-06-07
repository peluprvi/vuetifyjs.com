
const path = require('path')

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': path.resolve(__dirname, '../node_modules/vue/dist/vue.common.js')
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true
  }
}
