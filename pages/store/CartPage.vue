<template lang="pug">
  v-container#store-cart
    v-progress-linear(indeterminate :active="dataLoading" class="my-0" height="4")
    v-layout(column).mb-5
      v-flex(
        xs12
        v-if="!checkout.lineItems.length"
      )
        div.text-xs-center.headline Your cart is empty

      v-flex(xs12).text-xs-center
        v-btn(
          :to="{ name: 'store/Index' }"
          exact
          large
          flat
        ) Back to Store

    v-card(v-if="checkout.lineItems.length").mb-5
      v-data-table(
        :headers="headers"
        :items="checkout.lineItems"
        hide-actions
      )
        template(slot="items" slot-scope="{ item }")
          td
            img(:src="item.variant.image && item.variant.image.src").product-image
          td
            div(v-text="item.title")
            div(v-text="item.variant.title")
          td
            v-layout(align-center)
              span(v-text="item.quantity").subheading
              v-btn(icon flat small @click="removeItem(item)")
                v-icon(size="16px") remove_shopping_cart
          td.text-xs-right ${{ item.variant.price }}
          td.text-xs-right ${{ (item.variant.price * item.quantity).toFixed(2) }}

        template(slot="footer")
          td(colspan="100%").py-3
            v-layout(align-center)
              v-spacer
              span.subheading.mr-5 CART SUBTOTAL:
              span.grey--text.title ${{ checkout.subtotalPrice }}

      div.text-xs-right
        v-btn(
          :href="checkout.webUrl"
          target="_blank"
          color="primary"
          large
        ).mx-0 Proceed to checkout #[v-icon chevron_right]
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

    data: () => ({
      headers: [
        {
          text: 'Product',
          value: false,
          sortable: false
        },
        {
          text: 'Name',
          value: false,
          sortable: false
        },
        {
          text: 'Quantity',
          value: false,
          sortable: false
        },
        {
          text: 'Price',
          align: 'right',
          value: false,
          sortable: false
        },
        {
          text: 'Subtotal',
          align: 'right',
          value: false,
          sortable: false
        }
      ]
    }),

    computed: {
      ...mapState('store', ['checkout'])
    },

    methods: {
      removeItem (item) {
        this.dataLoading = true
        shopifyClient.checkout.removeLineItems(this.checkout.id, item.id).then(checkout => {
          console.log('removed item')
          this.$store.commit('store/SET_CHECKOUT', checkout)
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
