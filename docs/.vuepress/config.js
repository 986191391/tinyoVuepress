module.exports = {
  title: 'tinyo docs',
  description: 'Just playing around',
  base: '/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/article/' },
      { text: '心得', link: '/growth/' }
    ],
		sidebar: {
      '/article/': [
        {
          title: 'CSDN文章',
          collapsable: false,
          children: [ 'csdn/base', 'csdn/css', 'csdn/vue', 'csdn/jstype', 'csdn/browser', 'csdn/cssFun', 'csdn/promisePause', 'csdn/webOptimize' ]
        },
        {
          title: 'CSS / JS',
          collapsable: false,
          children: [ 'cssjs/css', 'cssjs/js', 'cssjs/jsdesignmode' ]
        },
        {
          title: 'Browser',
          collapsable: false,
          children: [ 'browser/browser' ]
        },
        {
          title: 'Vue',
          collapsable: false,
          children: [ 'vue/lifeCycle', 'vue/dataBinding', 'vue/communication', 'vue/vifvshowdiff', 'vue/computedwatchdiff', 'vue/vforkey', 'vue/routeGurad', 'vue/optimize', 'vue/router', 'vue/vuedataFunction' ]
        },
        {
          title: 'React',
          collapsable: false,
          children: [ 'react/lifeCycle', 'react/interview' ]
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
          title: '重点知识',
          collapsable: false,
          children: [ 'interview/this', 'interview/closure', 'interview/prototype', 'interview/inherit' ]
        },
        {
          title: '成长经历',
          collapsable: false,
          children: [ 'reacttovue', 'server', 'fabric', 'buildnodejsserver' ]
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