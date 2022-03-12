import { createStore } from 'vuex'

export default createStore({
  state: {
    actions: ': Store On'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getActions (state) {
      return state.actions
    }
  }
})
