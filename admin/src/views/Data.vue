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
          v-model="internalValue"
          :items="scaffolds"
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

        <core-crud />
      </v-card-text>
    </v-card>

    <core-table
      v-if="items.length > 0"
      @edit="edit"
      @remove="remove"
      :fields="fields"
      :items="items"
    />
  </section>
</template>

<script>
  // Utilities
  import {
    mapActions,
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    computed: {
      ...mapState('data', ['item', 'items', 'scaffold', 'scaffolds']),
      fields () {
        const fields = ['id']

        if (!this.items.length) return fields

        return fields.concat(
          Object.keys(this.items[0]).slice(0, 2)
        )
      },
      internalValue: {
        get () {
          return this.scaffold
        },
        set (val) {
          this.setScaffold(val)
          this.getItems()
        }
      }
    },

    async mounted () {
      this.getScaffolds()
    },

    methods: {
      ...mapActions('data', ['getItems', 'getScaffolds', 'removeItem']),
      ...mapMutations('data', {
        setIsEditing: 'SET_IS_EDITING',
        setItem: 'SET_ITEM',
        setScaffold: 'SET_SCAFFOLD'
      }),
      edit (item) {
        this.setItem(item)
        this.setIsEditing(true)
      },
      remove (item) {
        this.removeItem(item)
      }
    }
  }
</script>
