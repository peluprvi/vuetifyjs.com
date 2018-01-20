<template lang="pug">
  v-container(fluid)#store-product
    v-progress-linear(indeterminate :active="dataLoading" class="my-0" height="4")
    v-layout
      v-flex(tag="v-card")
        v-card-text
          v-layout
            v-flex(xs12 sm6).text-xs-center
              img(:src="product.images[0].src").product-image
            v-flex(xs12 sm6)
              div(v-text="product.title").display-1.mb-3
              div(v-text="`$${price}`").headline.green--text.mb-3
              div.mb-5
                span.caption.grey--text Description
                div(v-text="product.description")
              v-container(grid-list-xl pa-0)
                v-layout(wrap)
                  v-flex(xs12 sm6)
                    v-select(
                      v-model="selectedVariant"
                      :items="product.variants"
                      item-text="title"
                      item-value="id"
                      return-object
                      label="Select size"
                      hide-details
                    )
                  v-flex(xs12 sm6)
                    v-text-field(
                      v-model.number="quantity"
                      type="number"
                      label="Quantity"
                      max="5"
                      hide-details
                    )
                  v-flex(xs12).text-xs-right
                    v-btn(
                      round
                      color="primary"
                      @click="addToCart"
                      :loading="cartLoading"
                    )
                      span Add to Cart
                      v-icon(right size="18px") add_shopping_cart
</template>

<script>
  import shopifyClient from '@/util/shopifyClient'
  import asyncData from '@/util/asyncData'

  function getLongId (id) {
    // btoa() but for node
    return Buffer.from(`gid://shopify/Product/${id}`, 'binary').toString('base64')
  }

  function findProduct (store, id) {
    return store.state.store.products.find(p => p.id === id)
  }

  export default {
    mixins: [asyncData],

    props: {
      id: {
        type: String,
        default: ''
      }
    },

    asyncData ({ store, route }) {
      const longId = getLongId(route.params.id)
      // TODO: only fetch once
      typeof window !== 'undefined' && store.dispatch('store/getCheckout')
      return store.state.store.products.length && findProduct(store, longId)
        ? Promise.resolve()
        : store.dispatch('store/getProduct', longId)
    },

    data: () => ({
      cartLoading: false,
      selectedVariant: null,
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
        return this.selectedVariant.price
      }
    },

    created () {
      this.selectedVariant = this.product.variants[0]
    },

    methods: {
      addToCart () {
        this.asyncData.then(() => {
          this.cartLoading = true
          const checkout = this.$store.state.store.checkout.id
          const items = [{ variantId: this.selectedVariant.id, quantity: this.quantity }]

          shopifyClient.checkout.addLineItems(checkout, items).then(checkout => {
            this.$store.commit('store/SET_CHECKOUT', checkout)
            this.cartLoading = false
          })
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #store-product
    height: 100%
    display: flex
    flex-direction: column

  .product-image
    max-width: 100%
</style>
