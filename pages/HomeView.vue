<style lang="stylus" scoped>
  @import '../node_modules/vuetify/src/stylus/settings/_variables'

  #home
    background white
    color #455163
    #announcementBanner
      background #005caf
      color rgba(255,255,255,.98)
      font-weight 400
      height 50px
      padding 16px

      display: flex;
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
    margin 5vh 0

    .layout
      margin 0 -1em
      .flex
        padding-left: 1em
        padding-right: 1em
        margin-bottom: 4em
        text-align: center
        img
          box-shadow: 0 1px 3px rgba(0,0,0,0.18) !important;
          max-width 75%
          margin-bottom 1.75em
        h3
          font-size 21px
          color #455163
          line-height 1.2em
          font-weight 400
        p
          font-size 18px
          line-height 1.5em
          font-weight 300
          color #455163

    @media $display-breakpoints.md-and-up
      .layout
        .flex
          margin-bottom: 0
          text-align left
          img
            max-width 90%

    @media $display-breakpoints.xl-only
      .layout
        margin 0 -1.5em
        .flex
          padding-left: 1.5em
          padding-right: 1.5em
          h3
            font-size 24px
          p
            font-size 21px
          img
            max-width 75%
  #checkFeatures
    padding 2em 0
    h2
      font-size 42px
      font-weight 400
      margin-bottom .75em
      display block
      line-height 50px
      span
        font-size 36px
        font-weight 300
        display block
    ul
      li
        font-size 21px
        font-weight 300
  #letterFromAuthor
    .card
      box-shadow: 0 1px 3px rgba(0,0,0,0.18) !important;

    padding 2em 0
    p
      font-size 21px
      font-weight 300
      line-height 36px
  #support
    p
      font-size 28px
      font-weight 400
      margin: 0
  #sponsors-and-backers
    .card
      z-index 1
      padding: 2.5em 3em
      h2
        font-size 24px
        color #666666
        font-weight 300
        margin-bottom 1.5em
      img
        margin-bottom 1.5em
        max-width: 100%
  #callout
    position: relative
    color rgba(255,255,255,.98)
    @media $display-breakpoints.md-and-up
      padding: 2em 0;
    &:before
      content ''
      position absolute
      left 0
      right 0
      bottom 0
      height 100vw
      background url('/static/doc-images/slant-footer.svg') no-repeat  50% 100%
      background-size 100%
      @media $display-breakpoints.xs-only
        background-size 475%
        height 300vw
      @media $display-breakpoints.sm-only
        background-size 225%
        height 300vw
      @media $display-breakpoints.md-only
        background-size 140%
        height 300vw


    img
      position relative
    h2
      position: relative
      font-size 32px
      color white
      font-weight 300
      @media $display-breakpoints.lg-and-up
          font-size 40px
          width: 70%

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
      v-container
        v-layout(row wrap)
          v-flex(
            xs12 sm12 md4 lg4
            v-for="(feature, i) in features"
            :key="i"
          )

            img(:src="feature.img")
            h3 {{feature.title}}
            p {{feature.text}}

    section#checkFeatures
      h2.text-xs-center
        span All the Tools You  Need
        | To Build Incredible User Interfaces
      v-container
        v-layout(row)
          v-flex.xs4.offset-xs2
            ul
              li(v-for="(feature, i) in checkFeatures") {{feature.text}}
          v-flex.xs4
            ul
              li(v-for="(feature, i) in checkFeaturesCtd") {{feature.text}}

    section#letterFromAuthor
      v-container
        v-layout
          v-flex.xs9
            v-card.pa-5
                p Hey there,
                p I know choosing a UI framework can be a daunting task -- there are so many options to choose from and every one of them claims that they are the best. So you have to decide for yourself: what are the metrics for success?
                p This was me almost a year ago. There were plenty of UI toolkits to choose from, but none of them had everything that I needed, and that is why I started working on Vuetify.
                p I am extremely humbled that you have considered using Vuetify as your next UI Framework. A lot of care has went into crafting the perfect setup for taking any idea from conception to production. I look forward to you joining the Vuetify community and am excited to see what incredible interfaces you create!

          v-flex.xs3.text-xs-center
            p John Leider
            | Author of Vuetify
      v-container
    section#support.my-5
      v-container
          v-layout(row wrap)
            v-flex(xs3).text-xs-center
              a(
                href="https://www.patreon.com/vuetify"
                target="_blank" rel="noopener"
              )
                img(src="http://www.underconsideration.com/brandnew/archives/patreon_logo.png" width="75%")
            v-flex(xs9).mb-5
              p Has Vuetify helped you create an amazing application?
              p You can show your support for Vuetify by <a>becoming a patron</a>.
    section#sponsors-and-backers.my-5
      v-container
        v-card
          h2.text-xs-center.text-md-left Proudly Sponsored By
          v-layout(row wrap)
            v-flex(xs12 sm6 md4 lg3 v-for="(sponsor, i) in sponsors" :key="i").text-xs-center
                a(:href="sponsor.href" target="_blank" :title="sponsor.title" rel="noopener")
                  img(:src="sponsor.src"  :height="sponsor.height" ).sponsor
            v-flex(xs12 sm6 md4 lg3).text-xs-center
              v-btn(to="/vuetify/sponsors-and-backers" large).white.primary--text Become a sponsor
                v-icon(right).primary--text fa-arrow-circle-right

    section#callout
      v-container
        v-container
          v-layout(row wrap)
            v-flex(xs12 md8 lg10)
              img(src="/static/doc-images/logo.svg" height="90px")
              h2.mt-4.mb-5 Supercharge Your Development with the Power of Vue and Material Design
    home-footer
</template>

<script>
  import HomeFooter from 'components/HomeFooter'

  export default {
    name: 'home-view',
    data(){
      return {
        sponsors: [
          {
            title: 'BrowserStack',
            href: 'https://www.browserstack.com/',
            src: '/static/doc-images/browser-stack.svg',
            height: '50px'
          },
          {
            title: 'Cloudflare',
            href: 'https://www.cloudflare.com/',
            src: '/static/doc-images/cloudflare.svg'
          },
          {
            title: 'LMAX Exchange',
            href: 'https://careers.lmax.com/?utm_source=vuetify&utm_medium=logo-link&utm_campaign=lmax-careers',
            src: '/static/doc-images/backers/lmax-exchange.png',
            height: '45px'
          }
        ]
      }
    },

    components: {
      HomeFooter
    },

    computed: {
      features(){
        return this.$t('home.features')
      },
      checkFeatures(){
        // todo: this doesn't like retrieving an array of strings, made the objects for now
        return this.$t('home.checkFeatures')
      },
      checkFeaturesCtd(){
        // todo: this doesn't like retrieving an array of strings, made the objects for now
        return this.$t('home.checkFeaturesCtd')
      }
    }
  }
</script>
