<template>
  <section>
    <v-card class="mb-3">
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
          clearable
          label="Select a Scaffold"
          item-text="name"
          hide-details
          return-object
        >
          <template
            slot="item"
            slot-scope="{ item }"
          >
            <v-list-tile-avatar
              color="primary"
              class="white--text display-0"
              dark
            >
              {{ item.target && item.target.slice(0, 1).toUpperCase() }}
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.name" />
              <v-list-tile-sub-title v-text="item.scaffold" />
            </v-list-tile-content>
            <v-list-tile-action>
              {{ item.data && item.data.length }} fields
            </v-list-tile-action>
          </template>
        </v-autocomplete>
        <core-crud
          v-if="item"
          :value="item"
        />
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
  // Utilities
  import {
    mapActions,
    mapState
  } from 'vuex'

  export default {
    data: () => ({
      item: null
    }),

    computed: {
      ...mapState('data', ['items'])
    },
    async mounted () {
      this.getItems()
    },

    methods: {
      ...mapActions('data', ['getItems'])
    }
  }
</script>
