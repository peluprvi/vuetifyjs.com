<template lang="pug">
  v-container(pt-5)#store-cart
    v-layout
      v-flex.text-xs-center
        store-header(
          :header="$t('Vuetify.Store.cartHeader')"
          :sub-header="subHeader"
          :loading="dataLoading"
        )
        v-btn(
          color="primary"
          large
          :to="{ name: 'store/Index' }"
          v-if="!hasItems"
        )
          v-icon(left) chevron_left
          span {{ $t('Vuetify.Store.backToStore') }}

    template(v-if="hasItems")
      v-card.mb-5
        v-data-table(
          :headers="headers"
          :items="checkout.lineItems"
          hide-actions
        )
          template(slot="items" slot-scope="{ item }")
            td
              img(
                :src="item.variant.image.src"
                v-if="item.variant.image"
              ).product-image
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

      div.d-flex.justify-space-between.align-center
        div
          v-btn(
            flat
            :to="{ name: 'store/Index' }"
            exact
          ).mx-0
            v-icon(left) chevron_left
            span {{ $t('Vuetify.Store.backToStore') }}
        div.text-xs-right
          div.caption.grey--text You will be re-directed to Shopify to complete your purchase
          v-btn(
            @click="goToShopify"
            :href="checkout.webUrl"
            target="_blank"
            color="primary"
            large
          ).mx-0
            span(v-text="$t('Vuetify.Store.checkout')")
            v-icon chevron_right
</template>

<script>
  // Components
  import StoreHeader from '@/components/store/StoreHeader'

  // Utilities
  import shopifyClient from '@/util/shopifyClient'
  import { mapState } from 'vuex'
  import asyncData from '@/util/asyncData'

  export default {
    components: {
      StoreHeader
    },

    mixins: [asyncData],

    asyncData ({ store }) {
      return typeof window === 'undefined'
        ? Promise.resolve()
        : Promise.all([
          store.dispatch('store/getCheckout'),
          store.dispatch('store/getProducts')
        ])
    },

    data () {
      return {
        headers: this.$t('Vuetify.Store.cartHeaders')
      }
    },

    computed: {
      ...mapState('store', ['checkout', 'products']),
      hasItems () {
        return this.checkout.lineItems.length > 0
      },
      subHeader () {
        const subHeader = `Vuetify.Store.cart${!this.hasItems ? 'Empty' : ''}Subheader`

        return this.$t(subHeader)
      }
    },

    methods: {
      goToShopify () {
        this.$router.push({ name: 'store/ThankYou' })
      },

      removeItem (item) {
        this.dataLoading = true
        shopifyClient.checkout.removeLineItems(this.checkout.id, item.id).then(checkout => {
          console.log('removed item')
          this.$store.commit('store/SET_CHECKOUT', checkout)
        }).catch(err => {
          console.error(err.message)
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
