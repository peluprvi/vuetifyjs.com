<template lang="pug">
  v-container(layout column)#store
    h2.title Products
    v-fade-transition(mode="out-in")
      v-container(grid-list-md :key="products.length")
        v-layout(wrap)
          v-flex(
            xs12 sm4 md3
            v-for="product in products"
            :key="product.id"
            d-flex
          )
            store-product(:value="product")
    v-layout(justify-end)
      v-btn(:to="{ name: 'store/Cart' }") cart
</template>

<script>
  import asyncData from '@/util/asyncData'
  import StoreProduct from '@/components/store/StoreProduct'

  export default {
    components: {
      StoreProduct
    },

    mixins: [asyncData],

    asyncData ({ store }) {
      return store.state.store.hasFetchedProducts &&
        store.state.store.products.length
          ? Promise.resolve()
          : store.dispatch('store/getProducts')
    },

    computed: {
      products () {
        return this.$store.state.store.products
      }
    }
  }
</script>
