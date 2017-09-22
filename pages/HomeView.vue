<style lang="stylus" scoped>
#home
  .parallax.primary
    h1
      font-size 42px
      font-weight 400
      display block
      line-height 50px
      span
        font-size 36px
        font-weight 300
        display block
    .btn
      height 56px
      font-size 18px
#features
  padding-top 5vh
  background white
  h3
    font-size 21px
    color #455163
    line-height 1.2em
    font-weight 500
  p
    font-size 16px
    line-height 1.5em
    color #455163
</style>


<template lang="pug">
  div#home
    v-parallax(
      jumbotron
      height="70vh"
    ).primary
      v-layout(align-center justify-center)
        v-flex.text-xs-center
          img(src="/static/v-alt.svg" alt="Logo" height="160px")
          h1.mt-4.mb-5
            span Supercharge your development with
            | Vuetify Material Component Framework
          v-btn(
            secondary
            to="/getting-started/quick-start"
          ).px-3 Get Started
          p version 0.16.0

    section#features
      v-container(grid-list-lg)
        v-layout(row)
          v-flex(
            xs12 sm6 md4
            v-for="(feature, i) in features"
            :key="i"
          )
            h3 {{feature.title}}
            p {{feature.text}}
    section#sponsors-and-backers
      v-container
        v-card(height="200px")
    section#support
      v-container
        v-card(height="200px")
    section#callout
      v-container
        v-layout(row wrap)
          v-flex(xs12)
            img(alt="Logo")
    home-footer
</template>

<script>
  import HomeFooter from 'components/HomeFooter'

  export default {
    name: 'home-view',

    components: {
      HomeFooter
    },

    data: () => ({
      features: [
        {
          img: '',
          title: 'Vue-CLI Templates',
          text: 'Vuetify comes ready to go with 5 pre-made vue-cli templates. From simple html to full-blown SSR you are ready to go in minutes.'
        },
        {
          img: '',
          title: 'Custom Layouts',
          text: 'Each and every available layout from the Material design spec is at your disposal. Create unique and flexible user interfaces that fit the scope of any project.'
        },
        {
          img: '',
          title: 'Semantic Material Components',
          text: 'Be prepared for an armada of specialized components at your disposal. With over 80 in total, there is a solution for any application.'
        }
      ]
    })
  }
</script>
