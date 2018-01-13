<template lang="pug">
  v-data-iterator(
    :search="search"
    :items="computedItems"
    hide-actions
  ).component-parameters
    template(slot="item" slot-scope="{ item }")
      div(class="ma-2")
        div(class="pa-2 grey lighten-4 d-flex align-center")
          v-flex(xs3)
            div(class="header grey--text") Name
            div(class="mono name") {{ item.name }}
          v-flex(xs7)
            div(class="header grey--text") {{ item.type === 'Function' ? 'Signature' : 'Default' }}
            div(class="mono") {{ item.default }}
          v-flex(xs2 class="text-xs-right")
            div(class="header grey--text") Type
            div(class="mono") {{ item.type }}
        div(class="pa-2 grey lighten-3 grey--text text--darken-2 d-flex")
          v-flex(xs12)
            markdown(:source="item.description" class="justify")
            kbd(v-if="item.example" class="pa-2 d-flex mt-2 grey darken-2") {{ JSON.stringify(item.example, null, 2).replace(/\"(.*)\"\:\s\"(.*)\"/g, "$1: $2") }}

</template>

<script>
  import { capitalize, camel } from '@/util/helpers'

  export default {
    props: {
      target: String,
      headers: {
        type: Array,
        default: () => ([])
      },
      items: {
        type: Array,
        default: () => ([])
      },
      namespace: String,
      search: String,
      type: String
    },

    computed: {
      computedItems () {
        return this.items.map(item => {
          const newItem = {}

          if (item !== Object(item)) {
            item = { name: item }
          }

          for (const header of this.headers) {
            const key = header.value
            const fn = this[`gen${capitalize(key)}`]

            if (fn) {
              newItem[key] = fn(item[key] || item.name, item)
            } else {
              newItem[key] = item[key] == null ? '' : item[key]
            }
          }

          return newItem
        })
      }
    },

    methods: {
      genDescription (name, item) {
        let description = ''
        let devPrepend = ''
        const camelSource = camel(item.source)

        const specialLevelDesc = `${this.namespace}.${this.type}.${this.target}['${name}']`
        const componentLevelDesc = `${this.namespace}.${this.type}['${name}']`
        const mixinDesc = `Mixins.${camelSource}.${this.type}['${name}']`
        const genericDesc = `Generic.${capitalize(this.type)}['${name}']`

        if (this.$te(specialLevelDesc)) {
          description = this.$t(specialLevelDesc)

          if (description.indexOf('Mixins.') > -1) {
            description = this.$t(description)
          }

          devPrepend = '**SPECIAL** - '
        } else if (this.$te(componentLevelDesc)) {
          description = this.$t(componentLevelDesc)

          if (description.indexOf('Mixins.') > -1) {
            description = this.$t(description)
          }

          devPrepend = '**COMPONENT** - '
        } else if (this.$te(mixinDesc)) {
          description = this.$t(mixinDesc)
          devPrepend = '**MIXIN** - '
        } else if (this.$te(genericDesc)) {
          description = this.$t(genericDesc)
          devPrepend = '**GENERIC** - '
        } else {
          description = '**MISSING DESCRIPTION**'
        }

        // const prepend = process.env.NODE_ENV === 'development' ? devPrepend : ''
        const prepend = ''

        return `${prepend}${description}`
      },
      genName (name, item) {
        name = name || ''
        name = name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)
        const sync = item.sync && '.sync' || ''

        return `${name}${sync}`
      },
      genType (type) {
        type = Array.isArray(type) ? type : [type]

        return type.map(t => {
          return this.$t(`Generic.Types.${t}`)
        }).join(', ')
      },
      genProps (props) {
        if (!Array.isArray(props)) return 'Missing data'

        return `<kbd>{ ${props.join(', ')} }</kbd>`
      },
      genDefault (value) {
        if (typeof value !== 'string') return JSON.stringify(value)
        else return value
      }
    }
  }
</script>

<style lang="stylus">
  .component-parameters
    code
      white-space: nowrap
      box-shadow: none

    p
      margin-bottom: 0

    .mono
      font-family: monospace
      font-weight: 900

    .header
      font-size: 0.8rem

    .justify
      text-align: justify

    .name
      color: #bd4147

</style>
