import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    cartItems:[],
    totalPrice:0
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    },
    addClickedItem(state, item){
      const existingItem = state.cartItems.some((x) => x.name === item.name);
      if (existingItem) {
        const cartItem = state.cartItems.find((x) => x.name === item.name);
        if(cartItem.stock > cartItem.quantity){
          ++cartItem.quantity
          state.totalPrice=state.totalPrice+cartItem.amount
        console.log(state.cartItems.find((x) => x.name === item.name).quantity)
        }
        else {
          console.log('stok kalmadi')
        }
        
      } else {
        if(item.stock>0){
          state.cartItems.push(item);
          state.totalPrice=state.totalPrice+item.amount
          console.log('farkli')
        }else{
          console.log(item.stock)
          console.log('stock yok')
        }
      }
    },
    removeClickedQuantity(state, item){
      const existingItem = state.cartItems.some((x) => x.name === item.name);
      if (existingItem) {
        const cartItem = state.cartItems.find((x) => x.name === item.name);
        if(cartItem.quantity>1){
          --cartItem.quantity
          state.totalPrice=state.totalPrice-cartItem.amount
        console.log(state.cartItems.find((x) => x.name === item.name).quantity)
        }else {
          const index = state.cartItems.findIndex(x=> x.name === item.name);
          if (index !== -1) {
            state.cartItems.splice(index, 1);
            state.totalPrice=state.totalPrice-cartItem.amount
          }else{
            console.log('sikintiyo k')
          }
        }
        
      } else {
        if(item.quantity>1){
          state.cartItems.push(item);
          state.totalPrice=state.totalPrice-item.amount
          console.log('farkli')
        }else{
          console.log('URUN SEPETTE YOK')
        }
      }
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
