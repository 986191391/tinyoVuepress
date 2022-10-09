import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import cache from '@/utils/cache'
import { devEnvUrl } from '@/utils/env.js'

// NProgress: 进度条插件
NProgress.configure({ showSpinner: false })

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|ios|IEMobile/i.test(navigator.userAgent)

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
