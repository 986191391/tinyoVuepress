import Vue from 'vue'
import Vuex from 'vuex'
import mine from './modules/mine'
import user from './modules/user'
import legends from './modules/legends'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mine,
    user,
    legends
  },
  getters
})

export default store
