<template lang="pug">
  v-fade-transition(appear)
    v-app(v-cloak)
      app-drawer
      app-toolbar
      app-view
      app-fab
</template>

<script>
  import Meta from '@mixins/meta'

  export default {
    mixins: [Meta],

    watch: {
      $route (current, previous) {
        this.setupLayout(200)
      }
    },

    created () {
      this.setupLayout()
    },

    methods: {
      setupLayout (timeout = 300) {
        const drawer = this.$route.fullPath !== '/'
        this.$store.commit('app/STATELESS', !drawer)

        setTimeout(() => {
          if (this.$route &&
            this.$route.fullPath !== '/' &&
            this.$route.from &&
            this.$route.from.fullPath !== '/'
          ) return

          if (this.$vuetify.breakpoint.mdAndDown) return

          this.$store.commit('app/DRAWER', drawer)
        }, timeout)
      }
    }
  }
</script>

<style src="mdi/css/materialdesignicons.css"></style>

<style lang="stylus">
  @import '~vuetify/src/stylus/settings/_elevations.styl'

  code
    elevation(1)
  
  [v-cloak]
    display: none
</style>
