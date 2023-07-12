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
          title: '前端',
          collapsable: false,
          children: [
            'front/webOptimize',
            'front/webpack',
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
            'cssjs/cssFun',
            'cssjs/js',
            'cssjs/jstype',
            'cssjs/jsdesignmode',
            'cssjs/jsmodule',
            'cssjs/this',
            'cssjs/closure',
            'cssjs/prototype',
            'cssjs/inherit',
            // 'cssjs/jseventloop',
            'cssjs/mapObject',
            'cssjs/es7',
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
            'vue/vuecompile',
            // 'vue/originCode'
          ]
        },
        {
          title: 'React',
          collapsable: false,
          children: [
            'react/lifeCycle',
            'react/interview',
            'react/communication',
            'react/hooks'
          ]
        },
        {
          title: '浏览器',
          collapsable: false,
          children: [
            'browser/httpcache',
            'browser/cache',
            'browser/kernel',
            'browser/processthread',
            'browser/engine',
            'browser/inputurl',
            // 'browser/renderflow',
            'browser/compatible'
          ]
        },
        {
          title: 'Node.js',
          collapsable: false,
          children: [
            'node/base',
            'node/requireImport',
            'node/eventloop',
            'node/error',
            'node/advantage'
          ]
        },
        {
          title: '网络通信',
          collapsable: false,
          children: [
            'net/tcpip',
            'net/http',
            'net/httphttps',
            'net/http2http1'
          ]
        },
        {
          title: '其他',
          collapsable: false,
          children: [
            'utils/mybind',
            'utils/delayFetch',
            'utils/instanceof',
            'utils/debounceThrottle',
            'utils/isInViewPort'
          ]
        },
        {
          title: '花里胡哨',
          collapsable: false,
          children: [
            'flower/bookmarks',
            'flower/printWeb'
          ]
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