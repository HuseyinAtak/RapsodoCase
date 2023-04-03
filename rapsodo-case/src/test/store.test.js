import store from '../store'

test('setItems should update the items array in state', () => {
  const items = [
    { name: 'Item 1', stock: 10, amount: 10 },
    { name: 'Item 2', stock: 20, amount: 20 }
  ]

  store.commit('setItems', items)

  expect(store.state.items).toEqual(items)
})
