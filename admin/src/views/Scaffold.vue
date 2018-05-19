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
            :disabled="isEditing"
            :items="targets"
            label="Target"
          />
          <v-text-field
            v-model="item.name"
            label="Property Name"
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
      :fields="['name', 'file']"
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
        return `forms-scaffold-${this.scaffold.toLowerCase()}`
      }
    },

    async mounted () {
      this.getData()
    },

    methods: {
      ...mapActions('scaffold', ['getData']),
      ...mapMutations('scaffold', {
        setIsEditing: 'SET_IS_EDITING',
        setItem: 'SET_ITEM'
      }),
      edit (item) {
        this.setItem(item)
        this.setIsEditing(true)
      }
    }
  }
</script>
