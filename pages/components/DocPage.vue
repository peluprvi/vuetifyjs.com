<template lang="pug">
  example-view(:data="data" v-if="exists")
    slot
  not-found(v-else)
</template>

<script>
  import { getObjectValueByPath } from 'vuetify/es5/util/helpers'
  import { camel, kebab } from '@/util/helpers'
  import NotFound from '@/pages/general/404Page'

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
        const examples = `${this.computedSection}.${this.computedComponent}.examples`
        const lang = this.$i18n.getLocaleMessage('en')

        return getObjectValueByPath(lang, examples)
      },
      exists () {
        return (this.components || []).length > 0 ||
          (this.examples || []).length > 0
      }
    }
  }
</script>
