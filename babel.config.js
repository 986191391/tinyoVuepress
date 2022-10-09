module.exports = {
  'plugins': [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ],
  'env': {
    'development': {
      'sourceMaps': true,
      'retainLines': true
    }
  },
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
