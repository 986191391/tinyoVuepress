const path = require('path')
module.exports = {
  // 将打包后的docs文件放到 yuanjihuaDeploy 工程下, 部署在另一个工程中
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', //生产环境
  // publicPath: process.env.NODE_ENV === 'production' ? '/yuanjihua/' : '/yuanjihua/', // 测试环境
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  // 开发的时候配置的代理环境
  devServer: {
    // proxy: 'http://101.34.40.215:5088' // 测试环境
    proxy: 'http://39.108.169.162:6322' // 生产环境
  }  
}