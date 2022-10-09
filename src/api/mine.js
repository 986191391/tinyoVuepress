import request from '@/utils/request'
import { getToken } from '@/utils/auth'

// 获取我的收藏列表
export function getCollectList(data) {
  data.page = data.page || 1
  data.pageSize = data.size || 10
  return request({
    url: '/api/getUserGoods',
    headers: {
      isToken: true
    },
    method: 'post',
    data
  })
}

// 获取用户的积分信息
export function getScoreInfo(data) {
  return request({
    url: '/api/getScoreInfo',
    headers: {
      isToken: true
    },
    method: 'get',
    data
  })
}
