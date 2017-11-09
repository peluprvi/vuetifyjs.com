<template lang="pug">
  page(:id="id")
    page-heading
      template(slot="title") {{ $t(`Components.${namespace}.header`) }}
      div(v-html="$t(`Components.${namespace}.headerText`)")

    section#usage
      section-heading(value="Components.ComponentPage.usage")
      component-example(
        :new-in="data.usage.new"
        :file="`${folder}/${data.usage.file}`"
        :id="`data.usage-${-1}`"
      )
        div(
          slot="desc"
          v-html="genDesc(data.usage)"
        )

    section#api
      section-heading(value="Components.ComponentPage.api")
      v-tabs(v-if="components.length > 1" v-model="tabs" v-bind:scrollable="true").elevation-1
        v-tabs-bar.grey.lighten-4.px-3
          v-tabs-slider(color="primary")
          v-tabs-item(
            v-for="(componentName, i) in components"
            v-bind:href="`#${componentName}`"
            v-bind:key="i"
          ) {{ componentName }}
        v-tabs-items
          v-tabs-content(
            v-for="(componentName, i) in components"
            v-bind:id="componentName"
            v-bind:key="i"
          )
            div(class="pa-4 grey lighten-4")
              v-text-field(
                append-icon="search"
                label="Search..."
                single-line
                hide-details
                v-model="search"
              )
            component-parameters(
              v-for="(p, i) in ['props']"
              v-bind:component-name="componentName"
              v-bind:headers="headers[p]"
              v-bind:items="getItems(p, componentName)"
              v-bind:namespace="namespace"
              v-bind:search="search"
            )
      div(v-else v-for="(componentName, i) in components")
        div(class="pa-4 grey lighten-4")
          v-text-field(
            append-icon="search"
            label="Search..."
            single-line
            hide-details
            v-model="search"
          )
        component-parameters(
          v-for="(p, i) in ['props']"
          v-bind:component-name="componentName"
          v-bind:headers="headers[p]"
          v-bind:items="getItems(p, componentName)"
          v-bind:namespace="namespace"
          v-bind:search="search"
        )

    slot(name="top")
    section#examples
      section-heading(value="Components.ComponentPage.examples")

      component-example(
        :header="`#${i + 1} ${genHeader(example)}`"
        :new-in="example.new"
        :file="`${folder}/${example.file}`"
        :id="`example-${i + 1}`"
        :key="i"
        v-for="(example, i) in data.examples"
      )
        div(
          slot="desc"
          v-html="genDesc(example)"
        )

    section-heading {{ $t('Components.ComponentPage.examples') }}
    slot(name="bottom")
</template>

<script>
  export default {
    name: 'component-page',

    data: () => ({
      id: '',
      current: {
        props: null,
        slots: null,
        events: null,
        functional: null
      },
      headers: {
        props: [
          { text: 'Option', value: 'name', align: 'left' },
          { text: 'Type(s)', value: 'type', align: 'left' },
          { text: 'Default', value: 'default', align: 'left' },
          { text: 'Description', value: 'desc', align: 'left' }
        ],
        slots: [
          { text: 'Name', value: 'name', align: 'left' },
          { text: 'Description', value: 'description', align: 'left' }
        ],
        events: [
          { text: 'Name', value: 'name', align: 'left' },
          { text: 'Description', value: 'description', align: 'left' }
        ],
        functional: [
          { text: 'Name', value: 'name', align: 'left' },
          { text: 'Description', value: 'description', align: 'left' }
        ]
      },
      search: '',
      tabs: null
    }),

    props: {
      data: Object,
      default: () => {}
    },

    computed: {
      component () {
        return this.data.component
      },
      components () {
        let components = [this.component]

        if (this.data.components) {
          components = components.concat(this.data.components)
        }

        return components
      },
      name () {
        if (this.data.name) return this.data.name

        return this.data.component.split('-').slice(1).join('-')
      },
      folder () {
        return `${this.name}${this.data.plural ? '' : 's'}`
      },
      namespace () {
        const namespace = this.name.split('-').map(n => {
          return n.substr(0, 1).toUpperCase() + n.slice(1)
        }).join('')

        if (this.data.plural) return namespace

        return `${namespace}s`
      },
    },

    methods: {
      genDesc (example) {
        return this.$t(`Examples.${this.namespace}.${example.file}.desc`)
      },
      genHeader (example) {
        return this.$t(`Examples.${this.namespace}.${example.file}.header`)
      },
      getItems (name, componentName) {
        switch (name) {
          case 'props':
            return (this.genComponentProps()[componentName] || {})[name]
          break
        }
      },
      genComponentProps () {
        const props = {}

        this.components.forEach(component => {
          props[component] = this.$store.state.api[component]
        })

        return props
      }
    }
  }
</script>
