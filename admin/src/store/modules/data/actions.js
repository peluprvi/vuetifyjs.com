import Filesystem from '@/lib/Filesystem'

export default {
  getScaffolds: async store => {
    return Filesystem.read('scaffolds/data').fromAdmin()
      .then(res => {
        store.commit('SET_SCAFFOLDS', res.data.map((d, i) => {
          d.id = i + 1

          return d
        }))
      })
  },
  getItems: async store => {
    const scaffold = store.state.scaffold

    if (!scaffold) return Promise.resolve()

    return Filesystem.read(scaffold.name)[`from${scaffold.target}`]()
      .then(res => {
        store.commit('SET_ITEMS', res.data.map((d, i) => {
          d.id = i + 1

          return d
        }))
      }).catch(e => console.log(e))
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
    const scaffold = store.state.scaffold

    Filesystem.write(scaffold.name)[`to${scaffold.target}`](items)
      .then(async res => {
        await new Promise(resolve => setTimeout(resolve, 100))
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
