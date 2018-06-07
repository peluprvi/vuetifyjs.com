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

    return store.dispatch('setItems')
  },
  saveItem: async store => {
    const items = store.state.items.slice()

    items.push(Object.assign({}, store.state.item))

    store.commit('SET_ITEMS', items)

    return store.dispatch('setItems')
  },
  setItems: async store => {
    const items = store.state.items.slice().map(item => {
      const clone = Object.assign({}, item)
      delete clone.id

      return clone
    })

    Filesystem.write('scaffolds/data').toAdmin(items)
      .then(res => {
        store.dispatch('getItems')
      })
  },
  updateItem: async store => {
    const items = store.state.items.slice()
    const index = items.findIndex(i => {
      return i.id === store.state.item.id
    })

    // Should never get here but hey
    if (index < 0) return store.dispatch('saveItem')

    items.splice(index, 1, store.state.item)

    store.commit('SET_ITEMS', items)

    return store.dispatch('setItems')
  }
}
