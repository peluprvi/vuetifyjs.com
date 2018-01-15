<template lang="pug">
  v-container(d-flex style="height: 100%")#store-product
    v-card(v-if="!product" height="100%").fill-height
    v-card(v-else height="100%").layout.fill-height.wrap.align-content-start
      v-layout(flex xs12 sm4 md6 align-center justify-center)
        img(:src="product.images[0].src").product-image
      v-layout(wrap flex xs12 sm8 md6 align-content-start)
        v-flex(xs12)
          v-card-title(primary-title)
            div.headline.mb-0 {{ product.title }}
            div.green--text ${{ price }}
        v-flex(xs12)
          v-card-text
            v-layout(align-baseline)
              v-flex(xs6 mr-1)
                v-select(v-model="selectedVariant" :items="variantOptions" label="Size")
              v-flex(xs4 mx-1)
                v-text-field(v-model.number="quantity" type="number" label="Quantity")
              v-btn(flat @click="addToCart").ml-1 buy
</template>

<script>
  import shopifyClient from '@/util/shopifyClient'
  import asyncData from '@/util/asyncData'

  function getLongId (id) {
    return new Buffer(`gid://shopify/Product/${id}`, 'binary').toString('base64')
  }

  function findProduct (store, id) {
    return store.state.store.products.find(p => p.id === id)
  }

  export default {
    props: {
      id: String
    },

    mixins: [asyncData],

    asyncData ({ store, route }) {
      const longId = getLongId(route.params.id)
      return store.state.store.products.length && findProduct(store, longId)
        ? Promise.resolve()
        : store.dispatch('store/getProduct', longId)
    },

    data: () => ({
      selectedVariant: 0,
      quantity: 1
    }),

    computed: {
      product () {
        return findProduct(this.$store, this.longId)
      },
      longId () {
        return getLongId(this.id)
      },
      price () {
        return this.product.variants[this.selectedVariant].price
      },
      variantOptions () {
        return this.product.variants.map((v, i) => ({
          text: v.title,
          value: i
        }))
      }
    },

    methods: {
      addToCart () {
        //
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .product-image
    max-width: 100%
</style>
