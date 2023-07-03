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
          title: '知识记录',
          collapsable: false,
          children: [ 'csdn/base', 'csdn/jstype', 'csdn/browser', 'csdn/cssFun', 'csdn/promisePause' ]
        },
        {
          title: '前端',
          collapsable: false,
          children: [
            'front/webOptimize',
            'front/webpack',
            'front/es7',
            'front/lazyload',
            'front/reactive',
            'front/attack',
            'front/interfacetype'
          ]
        },
        {
          title: 'CSS / JS',
          collapsable: false,
          children: [
            'cssjs/css',
            'cssjs/js',
            'cssjs/jsdesignmode',
            'cssjs/jsmodule',
            'cssjs/this',
            'cssjs/closure',
            'cssjs/prototype',
            'cssjs/inherit',
            // 'cssjs/jseventloop',
            'cssjs/mapObject',
            'cssjs/implicitConversion',
            'cssjs/etarget',
            'cssjs/jstopic',
            'cssjs/jsasync'
          ]
        },
        {
          title: 'Vue',
          collapsable: false,
          children: [
            'vue/vue3upd',
            'vue/compositionapi',
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
            'vue/vuex',
            'vue/diff',
            'vue/vuecompile'
          ]
        },
        {
          title: 'React',
          collapsable: false,
          children: [ 'react/lifeCycle', 'react/interview', 'react/communication', 'react/hooks' ]
        },
        {
          title: '浏览器',
          collapsable: false,
          children: [
            'browser/kernel',
            'browser/processthread',
            'browser/engine',
            'browser/inputurl',
            'browser/cache',
            'browser/renderflow'
          ]
        },
        {
          title: '网络通信',
          collapsable: false,
          children: [
            'net/tcpip',
            'net/http',
            'net/httphttps'
          ]
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
          title: '项目经历',
          collapsable: false,
          children: [ 'myproject/myPrivate' ]
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