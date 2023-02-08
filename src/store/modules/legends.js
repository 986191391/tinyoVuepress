import { getClassifyMenu, getLegendList } from '@/api/legends'

const legends = {
  state: {
    // legendList: [],
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    // SET_LEGEND_LIST: (state, legendList) => {
    //   state.legendList = legendList
    // },
  },

  actions: {
    GetClassifyMenu ({ commit }, data) {
      return new Promise((resolve, reject) => {
        getClassifyMenu(data || {}).then(res => {
          const { payload } = res
          for(let key in payload) {
            payload[key] = payload[key].filter(i => i.count > 0)
          }
          resolve(payload)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetLegendList ({ commit }, data) {
      return new Promise((resolve, reject) => {
        getLegendList(data || {}).then(res => {
          // commit('SET_LEGEND_LIST', res.payload.records)
          resolve(res.payload)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default legends
