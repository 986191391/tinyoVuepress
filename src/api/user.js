import request from '@/utils/request'

// 登录方法
export function getUserInfo(accessToken) {
  const data = { accessToken }
  return request({
    url: '/api/getUserInfo',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}