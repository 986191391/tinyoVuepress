import { getTokenByCode, login } from '@/api/login'
import { getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import cache from '@/utils/cache'

const user = {
  state: {
    token: getToken(),
    userInfo: null
  },

  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 获取Token
    GetTokenByCode({ commit }, params) {
      const { code } = params
      return new Promise((resolve, reject) => {
        getTokenByCode(code).then(res => {
          if (res && res.payload) {
            setToken(res.payload.accessToken)
            resolve(res.payload.accessToken)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取Token
    GetUserInfo({ commit }, params) {
      const { accessToken } = params
      return new Promise((resolve, reject) => {
        getUserInfo(accessToken).then(res => {
          const { userInfo } = res.payload
          cache.session.set('userInfo', JSON.stringify(userInfo))
          commit('SET_USERINFO', userInfo)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 退出
    LogOut({ commit }) {
      return new Promise((resolve) => {
        // 清除sessionStorage中存储的userInfo 和 sessionObj
        cache.session.remove('userInfo')
        cache.session.remove('sessionObj')
        // 清除cookies中的token
        removeToken()
        // 清除store中存储的userInfo
        commit('SET_USERINFO', null)
        resolve()
      })
    }
  }
}

export default user
