import Vue from 'vue'
import shopifyClient from '@/util/shopifyClient'

export default {
  namespaced: true,

  state: () => ({
    products: [],
    hasFetchedProducts: false,
    cart: []
  }),

  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
      state.hasFetchedProducts = true
    },
    SET_PRODUCT (state, payload) {
      const existing = state.products.findIndex(p => p.id === payload.id)
      if (existing > -1) {
        Vue.set(state.products, existing, payload)
      } else {
        state.products.push(payload)
      }
    }
  },

  actions: {
    getProducts ({ commit }) {
      return shopifyClient.product.fetchAll().then(products => {
        commit('SET_PRODUCTS', products)
      })
    },
    getProduct ({ commit }, id) {
      return shopifyClient.product.fetch(id).then(product => {
        commit('SET_PRODUCT', product)
      })
    }
  }
}
