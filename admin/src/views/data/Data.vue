<template>
  <section>
    <v-layout>
      <v-flex>
        <v-card>
          <v-toolbar
            card
          >
            <v-toolbar-title>Site Data</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-autocomplete
              v-model="item"
              :items="items"
              box
              class="mt-0"
              label="Data"
              hide-details
            />
            <component :is="item" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
  const items = [
    'Supporters'
  ]

  const components = {}

  for (const item of items) {
    components[item] = () => import(`@/views/data/${item}`)
  }

  export default {
    components,

    data: () => ({
      item: 'Supporters',
      items
    })
  }
</script>
