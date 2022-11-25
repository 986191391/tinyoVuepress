module.exports = {
  title: 'tinyo docs',
  description: 'Just playing around',
  base: '/docs/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/csdn/' },
      { text: '心得', link: '/growth/' }
    ],
		sidebar: {
      '/csdn/': [
        {
          title: '文章',
          collapsable: false,
          children: [ 'base', 'css', 'vue', 'jstype', 'browser' ]
        },
        {
          title: '功能性全局方法',
          collapsable: false,
          children: [ 'utils/debounceThrottle', 'utils/isInViewPort' ]
        },
        {
          title: '花里胡哨',
          collapsable: false,
          children: [ 'flower/bookmarks', 'flower/printWeb' ]
        }
      ],
      '/growth/': [
        {
          title: '成长经历',
          collapsable: false,
          children: [ 'reacttovue', 'server' ]
        }
      ],
      '/': [
        {
          title: '关于我',
          path: '/'
        }
      ]
    }
    // sidebar: [
    //   {
    //     title: '简介',
    //     collapsable: false,
    //     children: [
    //       '/'
    //     ]
    //   },
    //   // {
    //   //   title: 'CSDN文章',
    //   //   collapsable: false,
    //   //   children: [
    //   //     '/guide'
    //   //   ]
    //   // }
    // ]
  }
}