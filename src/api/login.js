import request from '@/utils/request'

// 登录方法
export function getTokenByCode(code) {
  const data = { code }
  return request({
    url: '/api/getToken',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 登录方法
export function login(code) {
  const data = { code }
  return request({
    url: '/api/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}
