import Vue from 'vue'
import VueRouter from 'vue-router'
import PcLogin from '../views/pc/login/login.vue'
import PcHome from '../views/pc/home/home.vue'
import PcAnimate from '../views/pc/animate/animate.vue'
import PcAnimateCopy from '../views/pc/animate/animateCopy.vue'
import PcAuthor from '../views/pc/author/author.vue'
import PcThreeJs from '../views/pc/threeJs/threeJs.vue'
import PcBoard from '../views/pc/board/board.vue'
import PcViewport from '../views/pc/viewport/viewport.vue'
import PcFabric from '../views/pc/fabric/fabric.vue'
import PcHomeDesc from '../views/pc/home/component/desc/desc.vue'
import PcHomeSign from '../views/pc/home/component/sign/sign.vue'
import PcHomeMarkDown from '../views/pc/home/component/markdown/markdown.vue'
import PcHomeCssDemo from '../views/pc/home/component/cssDemo/cssDemo.vue'
import PcHomeCopyparse from '../views/pc/home/component/copyparse/copyparse.vue'
import PcHomeMusicbox from '../views/pc/home/component/musicbox/musicbox.vue'
import PcHomeNav from '../views/pc/home/component/nav/nav.vue'
import PcHomeGoBang from '../views/pc/home/component/gobang/gobang.vue'
import PcHomeLottery from '../views/pc/home/component/lottery/lottery.vue'
// import PcPlan from '../views/pc/plan/plan.vue'
// import PcLegends from '../views/pc/legends/legends.vue'
// import PcMine from '../views/pc/mine/mine.vue'
// import PcCollect from '../views/pc/mine/collect.vue'
// import PcScore from '../views/pc/mine/score.vue'
// import PcDemo from '../views/pc/demo/demo.vue'

import MobileHomeIndex from '../views/mobile/home/home.vue'
// import MobileAbout from '../views/mobile/about/about.vue'
// import MobilePlan from '../views/mobile/plan/plan.vue'
// import MobileLegends from '../views/mobile/legends/legends.vue'
// import MobileMine from '../views/mobile/mine/mine.vue'
// import MobileCollect from '../views/mobile/mine/collect.vue'
// import MobileScore from '../views/mobile/mine/score.vue'
// import MobileScoreRule from '../views/mobile/mine/scorerule.vue'
Vue.use(VueRouter)

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|ios|IEMobile/i.test(navigator.userAgent);

const pcRoutes = [
  {
    path: '/',
    name: 'login',
    component: PcLogin,
    meta: '登录'
  },
  {
    path: '/home',
    name: 'home',
    component: PcHome,
    meta: '首页',
    children: [
      {
        path: '/',
        name: 'desc',
        component: PcHomeDesc,
        meta: '首页描述'
      },
      {
        path: 'sign',
        name: 'sign',
        component: PcHomeSign,
        meta: '首页签章'
      },
      {
        path: 'markdown',
        name: 'markdown',
        component: PcHomeMarkDown,
        meta: 'MarkDown'
      },
      {
        path: 'cssDemo',
        name: 'cssDemo',
        component: PcHomeCssDemo,
        meta: 'cssDemo'
      },
      {
        path: 'copyparse',
        name: 'copyparse',
        component: PcHomeCopyparse,
        meta: 'copyparse'
      },
      {
        path: 'musicbox',
        name: 'musicbox',
        component: PcHomeMusicbox,
        meta: 'musicbox'
      },
      {
        path: 'directory',
        name: 'directory',
        component: PcHomeNav,
        meta: 'directory'
      },
      {
        path: 'gobang',
        name: 'gobang',
        component: PcHomeGoBang,
        meta: 'gobang'
      },
      {
        path: 'lottery',
        name: 'lottery',
        component: PcHomeLottery,
        meta: 'lottery'
      }
    ]
  },
  {
    path: '/animate',
    name: 'animate',
    component: PcAnimate,
    meta: '动画'
  },
  {
    path: '/animatec',
    name: 'animatec',
    component: PcAnimateCopy,
    meta: '动画'
  },
  {
    path: '/author',
    name: 'author',
    component: PcAuthor,
    meta: '作者'
  },
  {
    path: '/threeJs',
    name: 'threeJs',
    component: PcThreeJs,
    meta: 'threeJs'
  },
  {
    path: '/board',
    name: 'board',
    component: PcBoard,
    meta: 'board'
  },
  {
    path: '/viewport',
    name: 'viewport',
    component: PcViewport,
    meta: 'viewport'
  },
  // {
  //   path: '/lottery',
  //   name: 'lottery',
  //   component: PcLottery,
  //   meta: 'lottery'
  // },
  {
    path: '/fabric',
    name: 'fabric',
    component: PcFabric,
    meta: 'fabric'
  }
]

const mobileRoutes = [
  {
    path: "/",
    name: "homeIndex",
    component: MobileHomeIndex,
    meta: "首页",
  },
];

const router = new VueRouter({
  routes: isMobile ? mobileRoutes : pcRoutes,
})

export default router
