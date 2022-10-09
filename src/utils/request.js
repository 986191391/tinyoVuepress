import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { Dialog } from 'vant';
import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'
import { tansParams } from '@/utils/utils'
import cache from '@/utils/cache'
import store from '@/store'
import { theoneUrl } from '@/utils/env.js'

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|ios|IEMobile/i.test(navigator.userAgent)
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

// request拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  if (getToken() && !isToken) {
    config.headers.token = getToken()
    // config.headers.Authorization = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  // get请求映射params参数
  if (config.method === 'get' && config.data) {
    let url = config.url + '?' + tansParams(config.data)
    url = url.slice(0, -1)
    config.data = {}
    config.url = url
  }
  if (config.method === 'post' || config.method === 'put') {
    const requestObj = {
      url: config.url,
      data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
      time: new Date().getTime()
    }
    const sessionObj = cache.session.getJSON('sessionObj')
    if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
      cache.session.setJSON('sessionObj', requestObj)
    } else {
      const sUrl = sessionObj.url // 请求地址
      const sData = sessionObj.data // 请求数据
      const sTime = sessionObj.time // 请求时间
      const interval = 1000 // 间隔时间(ms)，小于此时间视为重复提交
      // 判断数据有没有更新 如果有则及时更新sessionObj里的数据
      if (sData === requestObj.data && requestObj.time - sTime < interval && sUrl === requestObj.url) {
        const message = '数据正在处理中，请耐心等待！'
        return Promise.reject(new Error(message))
      } else {
        cache.session.setJSON('sessionObj', requestObj)
      }
    }
  }
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  // 未设置状态码则默认成功状态
  const code = res.data.responseCode || res.data.code || 200
  // 获取错误信息
  const msg = res.data.responseMessage || errorCode[code] || res.data.msg || errorCode.default
  // 二进制数据则直接返回
  if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
    return res.data
  }
  if (code === '5012' || code === 'YJH0009') {
    loginFail('登录状态已过期，请重新登录！')
    return Promise.reject(new Error('登录状态已过期，请重新登录！'))
  } else if (code === '5008') {
    loginFail(msg)
  } else if (code === '500') {
    Message({
      message: '后端接口连接异常, 请联系管理员！',
      type: 'error',
      duration: 5 * 1000,
      customClass: isMobile && 'mobile-message'
    })
    return Promise.reject(new Error('Network Error'))
  } else {
    return res.data
  }
},
error => {
  let { message } = error
  if (message === 'Network Error') {
    message = '后端接口连接异常'
  } else if (message.includes('timeout')) {
    message = '系统接口请求超时'
  } else if (message.includes('Request failed with status code')) {
    message = '系统接口' + message.substr(message.length - 3) + '异常'
  }
  Message({
    message,
    type: 'error',
    duration: 5 * 1000,
    customClass: isMobile && 'mobile-message'
  })
  return Promise.reject(error)
}
)

function loginFail(msg) {
  if (isMobile) {
    Dialog.confirm({
      title: '系统提示',
      message: msg,
    })
    .then(() => {
      store.dispatch('LogOut').then(() => {
        window.open(theoneUrl, '_self')
      })
    })
    .catch(() => {
      store.dispatch('LogOut').then(() => {
        window.open('/', '_self')
      })
    })
  } else {
    MessageBox.confirm(msg, '系统提示', {
      confirmButtonText: '重新登录',
      type: 'warning'
    }).then((res) => {
      store.dispatch('LogOut').then(() => {
        window.open(theoneUrl, '_self')
      })
    }).catch((res) => {
      store.dispatch('LogOut').then(() => {
        window.open('/', '_self')
      })
    })
  }
}
export default service
