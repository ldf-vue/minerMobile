import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lan: window.localStorage.getItem('lan') || 'cn'
  },
  mutations: {
    increment (state, type) {
      state.lan = type
      window.localStorage.setItem('lan', type)
    }
  }
})

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store
