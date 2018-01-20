<template lang="pug">
  v-container(layout column)#store
    v-progress-linear(indeterminate :active="dataLoading" class="my-0" height="4")
    v-fade-transition(mode="out-in")
      v-container(grid-list-xl pa-0 :key="products.length")
        v-layout(wrap)
          v-flex(
            xs12 sm6 md4 lg3
            v-for="product in products"
            :key="product.id"
            d-flex
          )
            store-product(:value="product")
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
