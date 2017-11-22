<template lang="pug">

  section#api
    section-heading(value="Generic.ComponentPage.api")
    v-tabs(v-model="tab" v-bind:scrollable="false").elevation-1
      v-tabs-bar.grey.lighten-3.px-3
        v-tabs-slider(color="primary")
        v-tabs-item(
          v-for="(p, i) in tabs"
          :href="`#${p}`"
          :key="i"
        ) {{ p }}
      v-tabs-items
        v-tabs-content(
          v-for="(p, i) in tabs"
          :id="p"
          :key="i"
        )
          page-api-parameters(
            :headers="headers[p]"
            :type="p"
            :namespace="component.name"
            :components="components"
            :items="getItems(p)"
          )

</template>

<script>

  export default {
    name: 'page-api',

    props: {
      component: Object
    },

    data: () => ({
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
      tab: null,
      tabs: ['props', 'slots']
    }),

    computed: {
      components () {
        let components = [this.component.name]

        if (this.component.components) {
          components = components.concat(this.component.components)
        }

        return components
      },
    },

    methods: {
      getItems (name) {
        switch (name) {
          case 'props':
            return this.genComponentProps()
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
