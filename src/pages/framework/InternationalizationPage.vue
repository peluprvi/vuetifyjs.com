<template lang="pug">
  doc-view
    section#api
      section-head(value="Generic.Pages.api")
      v-card(class="mb-5")
        div(class="py-1")
          parameters(
            :headers="headers"
            :items="items"
            namespace="Guides"
            type="Internationalization"
            target="api"
          )

    section#usage
      section-head(value="Framework.Internationalization.gettingStarted")
      section-text(value="Framework.Internationalization.gettingStartedText")
      markup(lang="js")
        | import Vuetify from 'vuetify'
        | import sv from './i18n/vuetify/sv'
        |
        | Vue.use(Vuetify, {
        |   lang: {
        |     locales: { sv },
        |     current: 'sv'
        |   }
        | })
        |
        | ...
        |
        | Vue.component('my-component', {
        |   methods: {
        |     changeLocale () {
        |       this.$vuetify.lang.current = 'sv'
        |     }
        |   }
        |})

    section#translation
      section-head(value="Framework.Internationalization.createTranslation")
      section-text(value="Framework.Internationalization.createTranslationText")

      markup(lang="json")
        | {{ enLocale }}

    section#custom
      section-head(value="Framework.Internationalization.customComponents")
      section-text(value="Framework.Internationalization.customComponentsText")

      markup(lang="vue")
        | &lt;template&gt;
        |   &lt;div class="my-component"&gt;
        |     {{ '{{ $vuetify.t(\'my-component.text\') \}\}' }}
        |   &lt;/div&gt;
        | &lt;/template&gt;

</template>

<script>
  import enLocale from 'vuetify/es5/locale/en'

  export default {
    data: vm => ({
      enLocale,
      headers: [
        { value: 'name', size: 1 },
        { value: 'default', size: 7 },
        { value: 'type', size: 4 }
      ],
      items: [
        {
          name: 'locales',
          default: '{ en: VuetifyLocale }',
          type: 'Record<string, VuetifyLocale>'
        },
        {
          name: 'current',
          default: 'en',
          type: 'string'
        },
        {
          name: 't',
          default: '(key: string, ...params: Array<string | number>): string',
          type: 'Function'
        }
      ]
    })
  }
</script>
