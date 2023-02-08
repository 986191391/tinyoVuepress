import { getCollectList, getScoreInfo } from '@/api/mine'

const mine = {
  state: {
  },

  mutations: {
  },

  actions: {
    GetCollectList ({ commit }, params) {
      return new Promise((resolve, reject) => {
        getCollectList(params || {}).then(res => {
          resolve(res.payload)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetScoreInfo({ commit }, params) {
      return new Promise((resolve, reject) => {
        getScoreInfo(params || {}).then(res => {
          resolve(res.payload)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default mine
