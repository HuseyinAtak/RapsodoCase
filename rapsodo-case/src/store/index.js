import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    cartItems: [],
    totalPrice: 0
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    },
    addClickedItem(state, item) {
      const existingItem = state.cartItems.find((x) => x.name === item.name);
      const itemsStockControl = state.items.find((x) => x.name === item.name);
      if (existingItem) {
        if (existingItem.stock > existingItem.quantity) {
          existingItem.quantity++;
          itemsStockControl.stock--;
          state.totalPrice += existingItem.amount;
        } else {
          alert('Stok kalmadi');
        }
      } else {
        if (item.stock > 0) {
          const cartItem = { ...item, quantity: 1 };
          itemsStockControl.stock--;
          state.cartItems.push(cartItem);
          state.totalPrice += cartItem.amount;
        } else {
          alert('Stok yok.');
        }
      }
    },
    removeClickedQuantity(state, item) {
      const existingItemIndex = state.cartItems.findIndex((x) => x.name === item.name);
      const itemsStockControl = state.items.find((x) => x.name === item.name);
      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex];
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          itemsStockControl.stock++;
          state.totalPrice -= existingItem.amount;
        } else {
          itemsStockControl.stock++;
          state.cartItems.splice(existingItemIndex, 1);
          state.totalPrice -= existingItem.amount;
        }
      } else {
        alert('URUN SEPETTE YOK');
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

