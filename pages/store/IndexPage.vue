<template lang="pug">
  v-container(layout column)#store
    template(v-if="dataLoading && !products")
      div.display-4 Loading...
    template(v-else)
      h2.title Products
      v-fade-transition(mode="out-in")
        v-container(grid-list-md :key="products.length")
          v-layout(wrap)
            store-product(v-for="product in products" :product="product" :key="product.id")
      v-layout(justify-end)
        v-btn(:to="{ name: 'store/Cart' }") cart
</template>

<script>
  import asyncData from '@/util/asyncData'
  import StoreProduct from '@/components/store/StoreProduct'

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

<style lang="stylus" scoped>
  #store
    height: 100%
</style>
