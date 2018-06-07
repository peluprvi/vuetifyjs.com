<template>
  <section>
    <core-card title="Scaffold">
      <v-form ref="form">
        <v-card-text>
          <v-autocomplete
            v-model="item.scaffold"
            :disabled="isEditing"
            :items="scaffolds"
            label="Create new"
          />
          <v-autocomplete
            v-model="item.target"
            :items="targets"
            label="Target"
          />
          <v-text-field
            v-model="item.name"
            label="File location (lowercase)"
          ></v-text-field>
        </v-card-text>
      </v-form>
    </core-card>

    <core-card
      v-if="item.scaffold"
      :title="item.scaffold"
    >
      <component :is="component" />
    </core-card>

    <core-table
      @edit="edit"
      @remove="remove"
      :fields="['id', 'name']"
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

  // Grab all scaffold forms
  const forms = require.context(
    '@/components/forms/scaffold',
    false,
    /\.vue$/
  )

  const scaffolds = forms.keys().map(form => form.replace(/\.\/|\.vue/g, ''))

  export default {
    data: () => ({
      scaffolds,
      targets: ['Docs', 'Admin']
    }),

    computed: {
      ...mapState('scaffold', [
        'isEditing',
        'item',
        'items'
      ]),
      component () {
        return `forms-scaffold-${this.item.scaffold.toLowerCase()}`
      }
    },

    async mounted () {
      this.getItems()
    },

    methods: {
      ...mapActions('scaffold', ['getItems', 'removeItem']),
      ...mapMutations('scaffold', {
        setIsEditing: 'SET_IS_EDITING',
        setItem: 'SET_ITEM'
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
