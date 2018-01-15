<template lang="pug">
  v-flex(xs12 sm4 md3 d-flex)
    v-card(:to="{ name: 'store/Product', params: { id: shortId }}")
      v-card-media(contain :src="product.images[0].src" height="150")
      v-card-title(primary-title)
        div.headline.mb-0 {{ product.title }}
        div {{ product.description }}
      v-spacer
      v-card-text.green--text {{ priceRange }}
</template>

<script>
  export default {
    props: {
      product: Object
    },

    computed: {
      priceRange () {
        const prices = this.product.variants
          .map(v => v.price)
          .sort((a, b) => +a > +b)

        if (prices[0] === prices[prices.length - 1]) {
          return `$${prices[0]}`
        } else {
          return `$${prices[0]} - $${prices[prices.length - 1]}`
        }
      },
      shortId () {
        const arr = new Buffer(this.product.id, 'base64').toString('binary').split('/')
        return arr[arr.length - 1]
      }
    }
  }
</script>
