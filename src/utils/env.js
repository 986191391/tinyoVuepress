const path = require('path')
module.exports = {
  localNevUrl: 'http://localhost:8080', // 本地环境
  devEnvUrl: 'http://101.34.40.215:8081', // 测试环境
  proEnvUrl: 'http://39.108.169.162:6322', // 生产环境
  // 跳转唯一的路径
  theoneUrl: `https://theone.art/Authorize?appId=wy16624567109508982 &scope=user_base,user_position&redirectUri=http://yuanjihua.art/${process.env.NODE_ENV === 'development' ? '?isDev' : ''}#/` 
}