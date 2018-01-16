<template lang="pug">
  v-container(d-flex style="height: 100%")#store-cart
    v-fade-transition(mode="out-in")
      template(v-if="!checkout")
        div.display-4 Loading...
      template(v-else)
        v-layout(column)
          div(v-if="dataLoading").display-2 More loading...
          v-flex(xs12 v-if="!checkout.lineItems.length")
            div Your cart is empty
            v-btn(:to="{ name: 'store/Index' }" exact) Buy some shit
          v-card(class="d-flex" height="120" v-else v-for="(item, i) in checkout.lineItems" :key="item.id")
            v-layout(pa-3)
              v-flex(xs2)
                img(:src="item.variant.image && item.variant.image.src").product-image
              v-flex(xs6)
                div {{ item.title }}
                div {{ item.variant.title }}
              v-flex(xs1) ${{ item.variant.price }}
              v-flex(xs3)
                div {{ item.quantity }}
                v-btn(@click="removeItem(item)") remove
          v-layout(justify-end shrink my-5 mx-3)
            v-btn(:href="checkout.webUrl" target="_blank" color="primary") Proceed to checkout #[v-icon chevron_right]
</template>

<script>
  import shopifyClient from '@/util/shopifyClient'
  import { mapState } from 'vuex'
  import asyncData from '@/util/asyncData'

  export default {
    mixins: [asyncData],

    asyncData ({ store }) {
      return typeof window === 'undefined'
        ? Promise.resolve()
        : Promise.all([
          store.dispatch('store/getCheckout'),
          store.dispatch('store/getProducts')
        ])
    },

    computed: {
      ...mapState('store', ['checkout'])
    },

    watch: {
      checkout (val) {
        console.log(val)
      }
    },

    methods: {
      removeItem (item) {
        this.dataLoading = true
        shopifyClient.checkout.removeLineItems(this.checkout.id, item.id).then(() => {
          console.log('removed item')
          return this.$store.dispatch('store/getCheckout')
        }).then(() => {
          this.dataLoading = false
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mt-a
    margin-top: auto

  .product-image
    max-width: 100%
    max-height: 100%
</style>
