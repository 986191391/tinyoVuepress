import request from '@/utils/request'

// 获取枚举值
export function getClassifyMenu(data) {
  return request({
    url: '/api/getDict',
    headers: {
      isToken: false
    },
    method: 'get',
    data
  })
}

// 获取图例展示列表
export function getLegendList(data) {
  data.page = data.page || 1
  data.size = data.size || 24
  return request({
    url: '/api/qryFiles',
    headers: {
      isToken: true
    },
    method: 'post',
    data
  })
}

