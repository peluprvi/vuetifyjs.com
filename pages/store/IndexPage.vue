<template lang="pug">
  v-container#store
    h2.title Products
    v-container(grid-list-md)
      v-layout(wrap)
        store-product(v-for="product in products" :product="product" :key="product.id")
</template>

<script>
  import StoreProduct from '@/components/store/StoreProduct'
  import shopifyClient from '@/util/shopifyClient'

  export default {
    data: () => ({
      products: []
    }),

    components: {
      StoreProduct
    },

    created () {
      this.$store.commit('app/DRAWER', false)
    },

    mounted () {
      shopifyClient.product.fetchAll().then(products => {
        this.products = products
      })
    },

    beforeDestroy () {
      this.$store.commit('app/DRAWER', true)
    }
  }
</script>
