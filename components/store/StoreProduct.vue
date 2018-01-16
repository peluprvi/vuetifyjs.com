<template lang="pug">
  v-card(:to="{ name: 'store/Product', params: { id: shortId }}")
    div.text-xs-center.pt-2.mb-4
      img(
        src="/static/doc-images/logo-inverted.png"
        width="24px"
        alt="Vuetify Store Logo"
      )
    v-card-media(
      contain
      :src="value.images[0].src"
      height="150"
    ).mb-3
    v-divider
    v-layout(column justify-space-between).ma-0
      v-card-text
        v-list(three-line).py-0.mb-3
          v-list-tile-content
            v-list-tile-title {{ value.title }}
            v-list-tile-sub-title(style="min-height: 36px").caption {{ value.description }}
        div.text-xs-center
          div.green--text.headline.mb-3 {{ priceRange }}
          v-btn(depressed color="primary")
            v-icon(left) shopping_cart
            span Add to Cart
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        required: true
      }
    },

    computed: {
      priceRange () {
        const prices = this.value.variants
          .map(v => v.price)
          .sort((a, b) => +a > +b)

        if (prices[0] === prices[prices.length - 1]) {
          return `$${prices[0]}`
        } else {
          return `$${prices[0]} - $${prices[prices.length - 1]}`
        }
      },
      shortId () {
        // atob() but for node
        const arr = Buffer.from(this.value.id, 'base64').toString('binary').split('/')
        return arr[arr.length - 1]
      }
    }
  }
</script>
