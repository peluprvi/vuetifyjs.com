<template lang="pug">
  v-container(v-bind="$attrs").page
    app-back-fab(:to="to" v-if="to && !noBack")
    slot(:namespace="namespace")
</template>

<script>
  // Utilities
  import { camel } from '@/util/helpers'

  export default {
    inheritAttrs: false,

    props: {
      noBack: {
        type: Boolean,
        default: false
      }
    },

    data: vm => ({
      to: { name: vm.$store.state.route.from.name }
    }),

    computed: {
      namespace () {
        const route = this.$route.path.split('/').slice(2)

        return route.map(s => camel(s)).join('.')
      }
    }
  }
</script>
