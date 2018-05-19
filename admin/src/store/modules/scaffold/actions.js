import client from '@/plugins/axios'

export default {
  getData: async store => {
    return client.get('read', {
      params: {
        file: 'scaffolds/data',
        crud: true
      }
    }).then(res => {
      store.commit('SET_ITEMS', res.data)
    })
  },
  saveData: async store => {
    this.$emit('save', {
      file: 'scaffolds/data',
      data: this.scaffold
    })

    const item = {
      crud: target === 'Admin',
      target: this.target,
      scaffold: this.scaffold,
      name,
      ...val
    }

    this.items.splice(this.index, 1, item)

    await this.$http.post('write', {
      data: this.items
    })

    this.getData()
  }
}
