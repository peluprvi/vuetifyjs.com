<template lang="pug">
  v-container(d-flex style="height: 100%")#store-product
    v-fade-transition(mode="out-in")
      v-card(v-if="dataLoading" height="100%")
        div.display-4 Loading...
      v-card(v-else-if="!product" height="100%").fill-height
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
                  v-select(v-model="selectedVariant" :items="product.variants" item-text="title" item-value="id" return-object label="Size")
                v-flex(xs4 mx-1)
                  v-text-field(v-model.number="quantity" type="number" label="Quantity")
                v-btn(flat @click="addToCart").ml-1 buy
          v-flex(xs12)
            v-card-text {{ product.description }}
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
      typeof window !== 'undefined' && store.dispatch('store/getCheckout')
      return Promise.all([
        !(store.state.store.products.length && findProduct(store, longId))
          && store.dispatch('store/getProduct', longId),
      ])
    },

    data: () => ({
      selectedVariant: null,
      quantity: 1
    }),

    created () {
      this.selectedVariant = this.product.variants[0]
    },

    computed: {
      product () {
        return findProduct(this.$store, this.longId)
      },
      longId () {
        return getLongId(this.id)
      },
      price () {
        return this.selectedVariant.price
      }
    },

    methods: {
      addToCart () {
        this.asyncData.then(() => {
          const checkout = this.$store.state.store.checkout.id
          const items = [{ variantId: this.selectedVariant.id, quantity: this.quantity }]

          shopifyClient.checkout.addLineItems(checkout, items).then(checkout => {
            console.log('added')
          })
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .product-image
    max-width: 100%
</style>
