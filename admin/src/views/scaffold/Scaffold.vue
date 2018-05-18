<template>
  <section>
    <core-card title="Scaffold">
      <v-card-text>
        <v-autocomplete
          v-model="scaffold"
          :items="scaffolds"
          label="Create new"
        />
      </v-card-text>
    </core-card>
    <core-card
      v-if="scaffold"
      :title="scaffold"
    >
      <component :is="component" />
    </core-card>
  </section>
</template>

<script>
  const forms = require.context('./forms', false, /\.vue$/)
  const components = {}
  const scaffolds = []

  for (const form of forms.keys()) {
    const component = form.replace('./', '')
    const name = component.replace('.vue', '')

    components[name] = () => import(`./forms/${component}`)
    scaffolds.push(name.replace('Scaffold', ''))
  }

  export default {
    components,

    data: () => ({
      scaffold: null,
      scaffolds
    }),

    computed: {
      component () {
        return `scaffold-${this.scaffold.toLowerCase()}`
      }
    }
  }
</script>
