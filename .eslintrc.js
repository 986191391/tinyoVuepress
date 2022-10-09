// ESlint 检查配置
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: "babel-eslint"
  },
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 0
  }
}