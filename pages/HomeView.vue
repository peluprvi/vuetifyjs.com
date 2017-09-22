<style lang="stylus" scoped>
  #announcementBanner
    background #005caf
    color rgba(255,255,255,.9)
    font-weight 400
    height 50px
    padding 16px

    display: flex;
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
    padding 5vh 0
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
    #announcementBanner
      p {{ $t('home.announcementBanner')}}
    v-parallax(
      jumbotron
      height="70vh"
    ).primary
      v-layout(align-center justify-center)
        v-flex.text-xs-center
          img(src="/static/v-alt.svg" alt="Logo" height="160px")
          h1.mt-4.mb-5
            span {{ $t("home.heading1")}}
            | {{ $t("home.heading1cont")}}
          v-btn(
            secondary
            to="/getting-started/quick-start"
          ).px-3 {{ $t("home.getStarted")}}
          p version 0.16.0

    section#features
      v-container(grid-list-lg)
        v-layout(row wrap)
          v-flex(
            xs12 sm12 md4 lg4
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

    computed: {
      features(){
        return this.$t('home.features')
      }
    },

    data: () => ({
    })
  }
</script>
