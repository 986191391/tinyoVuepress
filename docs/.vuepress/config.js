module.exports = {
  title: 'tinyo docs',
  description: 'Just playing around',
  base: '/docs/',
  themeConfig: {
    sidebar: [
      {
        title: '简介',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'CSDN文章',
        collapsable: false,
        children: [
          '/guide'
        ]
      }
    ]
  }
}