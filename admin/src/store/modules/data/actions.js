import Filesystem from '@/lib/Filesystem'

export default {
  getItems: async store => {
    return Filesystem.read('scaffolds/data').fromAdmin()
      .then(res => {
        store.commit('SET_ITEMS', res.data.map((d, i) => {
          d.id = i + 1

          return d
        }))
      })
  },
  removeItem: async (store, payload) => {
    const items = store.state.items.filter(item => item.id !== payload.id)

    store.commit('SET_ITEMS', items)

    return store.dispatch('setData')
  },
  saveItem: async store => {
    const items = store.state.items.slice()

    items.push(Object.assign({}, store.state.item))

    store.commit('SET_ITEMS', items)

    return store.dispatch('setData')
  },
  setItems: async store => {
    const items = store.state.items.slice().map(item => {
      const clone = Object.assign({}, item)
      delete clone.id

      return clone
    })

    Filesystem.write('scaffolds/data').toAdmin(items)
      .then(res => {
        store.commit('RESET_ITEM')
        store.dispatch('getData')
      })
  }
}
