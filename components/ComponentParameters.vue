<template lang="pug">
  v-card.component-parameters
    v-card-text
      v-data-table(
        v-if="items.length"
        v-bind:headers="headers"
        v-bind:search="search"
        v-bind:items="parsedItems"
        v-bind:pagination.sync="pagination"
      )
        template(slot="items" slot-scope="{ item }")
          td(
            v-for="(opt, i) in item"
            v-bind:key="i"
            v-html="opt"
          )
      div(v-else class="px-2 py-5 grey--text text-xs-center") No data for this component
</template>

<script>
  export default {
    name: 'component-parameters',

    data () {
      return {
        pagination: {
          rowsPerPage: 10
        },
        shared: {}
      }
    },

    props: {
      componentName: String,
      headers: {
        type: Array,
        default: () => ([])
      },
      items: {
        type: Array,
        default: () => ([])
      },
      namespace: String,
      search: String
    },

    computed: {
      parsedItems () {
        const items = this.items || []
        return items.map(item => {
          const def = item.default
          const type = this.$t(`Generic.Types.${item.type}`)
          let description = ''

          const specialLevelDesc = `Components.${this.namespace}.special.props.${this.componentName}.${item.name}`
          const componentLevelDesc = `Components.${this.namespace}.props.${item.name}`
          const genericDesc = `Generic.Props.${item.name}`
          if (this.$te(specialLevelDesc)) {
            description = this.$t(specialLevelDesc)
          } else if (this.$te(componentLevelDesc)) {
            description = this.$t(componentLevelDesc)
          } else if (this.$te(genericDesc)) {
            description = this.$t(genericDesc)
          }

          return {
            name: this.parseName(item.name),
            type,
            default: type === 'Boolean' && def === 'undefined' ? 'false' : def,
            description
          }
        })
      }
    },

    methods: {
      parseName (name) {
        name = name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)

        return `<code>${name}</code>`
      }
    }
  }
</script>

<style lang="stylus">
  .component-parameters
    box-shadow: none
    code
      white-space: nowrap
</style>
