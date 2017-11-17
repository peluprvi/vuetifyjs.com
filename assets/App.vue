<template lang="pug">
  v-app
    app-drawer
    app-toolbar
    app-view
    app-fab
</template>

<script>
  import Meta from '@mixins/meta'
  // import AppDrawer from '@core/AppDrawer'
  // import AppToolbar from '@core/AppToolbar'
  // import AppView from '@core/AppView'
  // import AppFab from '@core/AppFab'

  export default {
    // components: {
    //   AppDrawer,
    //   AppToolbar,
    //   AppView,
    //   AppFab
    // },

    mixins: [Meta],

    watch: {
      $route (current, previous) {
        this.setupLayout(200)
      }
    },

    mounted () {
      this.setupLayout()
    },

    methods: {
      setupLayout (timeout = 300) {
        const drawer = this.$route.fullPath !== '/'

        setTimeout(() => {
          this.$store.commit('app/STATELESS', !drawer)

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
</style>
