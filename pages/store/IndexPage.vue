<template lang="pug">
  v-container#store
    h2.title Products
    v-container(grid-list-md)
      v-layout(wrap)
        store-product(v-for="product in products" :product="product" :key="product.id")
</template>

<script>
  import asyncData from '@/util/asyncData'
  import StoreProduct from '@/components/store/StoreProduct'
  import shopifyClient from '@/util/shopifyClient'

  export default {
    mixins: [asyncData],

    asyncData ({ store }) {
      return store.state.store.hasFetchedProducts
        && store.state.store.products.length
          ? Promise.resolve()
          : store.dispatch('store/getProducts')
    },

    computed: {
      products () {
        return this.$store.state.store.products
      }
    },

    components: {
      StoreProduct
    }
  }
</script>
