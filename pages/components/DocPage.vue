<template lang="pug">
  example-view(:data="data" v-if="exists")
    slot
  not-found(v-else)
</template>

<script>
  import { camel, kebab } from '@/util/helpers'
  import NotFound from '@/pages/general/404Page'

  const examples = require('@/data/examples.json')

  export default {
    components: { NotFound },

    props: {
      component: {
        type: String,
        default: ''
      },
      section: {
        type: String,
        default: ''
      },
      toc: {
        type: String,
        default: ''
      }
    },

    computed: {
      components () {
        // TODO: move out of translation files
        const components = `${this.computedSection}.${this.computedComponent}.components`

        return this.$te(components)
          ? this.$t(components)
          : this.$te(components, 'en')
            ? this.$t(components, 'en')
            : []
      },
      computedComponent () {
        return camel(this.component)
      },
      computedSection () {
        return camel(this.section)
      },
      data () {
        return {
          components: this.components,
          examples: this.examples,
          folder: kebab(this.computedComponent),
          toc: this.toc
        }
      },
      examples () {
        return examples[this.component].map(file => {
          const namespace = `${this.computedSection}.${this.computedComponent}.examples.${file}`

          return {
            file,
            desc: `${namespace}.desc`,
            header: `${namespace}.header`
          }
        })
      },
      exists () {
        return (this.components || []).length > 0 ||
          (this.examples || []).length > 0
      }
    }
  }
</script>
