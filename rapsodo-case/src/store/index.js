import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    }
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await fetch('https://fe-test-case-eeca77cfvq-ue.a.run.app')
        const items = await response.json()
        commit('setItems', items)
      } catch (error) {
        console.error(error)
      }
    }
  },
  getters: {
  },
  modules: {
  }
})
