<template>
  <router-view/>
</template>

<script>
  import { camel } from '@/util/helpers'
  import { mapState } from 'vuex'

  export default {
    props: {
      lang: {
        type: String,
        default: 'en'
      }
    },

    computed: {
      ...mapState({
        loadedLangs: state => state.loadedLangs
      })
    },

    created () {
      this.$i18n.locale = this.lang
    },

    async beforeRouteUpdate (to, from, next) {
      const locale = to.params.lang
      const localeFile = camel(locale)

      if (this.loadedLangs.indexOf(locale) < 0) {
        await import(
          /* webpackChunkName: "lang-[request]" */
          /* webpackMode: "lazy-once" */
          `@/lang/${localeFile}`
          ).then(msgs => this.$i18n.setLocaleMessage(locale, msgs.default))
          .catch(err => Promise.resolve(err))
      }

      document.querySelector('html').setAttribute('lang', locale)
      this.$i18n.locale = locale
      next()
    }
  }
</script>
