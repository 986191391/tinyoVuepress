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
          title: '前端',
          collapsable: false,
          children: [ 'front/webOptimize', 'front/webpack' ]
        },
        {
          title: 'CSS / JS',
          collapsable: false,
          children: [ 'cssjs/css', 'cssjs/js', 'cssjs/jsdesignmode', 'cssjs/jsmodule' ]
        },
        {
          title: 'Vue',
          collapsable: false,
          children: [
            'vue/lifeCycle',
            'vue/dataBinding',
            'vue/communication',
            'vue/vifvshowdiff',
            'vue/computedwatchdiff',
            'vue/vforkey',
            'vue/routeGurad',
            'vue/optimize',
            'vue/router',
            'vue/vuedataFunction',
            'vue/directive',
            'vue/keepalive',
            'vue/set',
            'vue/vuex'
          ]
        },
        {
          title: 'React',
          collapsable: false,
          children: [ 'react/lifeCycle', 'react/interview', 'react/communication' ]
        },
        {
          title: 'Browser',
          collapsable: false,
          children: [ 'browser/browser', 'browser/inputurl', 'browser/cache', 'browser/engine' ]
        },
        {
          title: '网络通信',
          collapsable: false,
          children: [ 'net/tcpip', 'net/http' ]
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
          children: [ 'reacttovue', 'server', 'fabric', 'buildnodejsserver', 'nodejsmysql', 'job' ]
        }
      ],
      '/': [
        {
          title: '首页',
          collapsable: false,
          children: [ '/', '/home/life' ]
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