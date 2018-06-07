<template>
  <v-card
    v-if="scaffold.data"
    color="grey lighten-3"
    flat
  >
    <v-form ref="form">
      <v-container fluid>
        <v-layout>
          <v-flex>
            <component
              v-if="!field.conditional || passesConditional(field.conditions)"
              v-for="(field, i) in scaffold.data"
              v-bind="field.attrs"
              :is="types[field.type]"
              :key="i"
              :label="field.label"
              v-model="internalValue[camelCase(field.label)]"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-divider />
    <v-card-actions>
      <v-btn
        v-if="isEditing"
        flat
        @click="reset"
      >
        Cancel
      </v-btn>
      <v-spacer />
      <v-btn
        color="primary"
        depressed
        @click="action"
      >
        {{ isEditing ? 'Update' : 'Add' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  // Utilities
  import {
    mapActions,
    mapMutations,
    mapState
  } from 'vuex'
  import { camelCase } from 'lodash'

  export default {
    data: () => ({
      types: {
        autocomplete: 'v-autocomplete',
        select: 'v-select',
        switch: 'v-switch',
        text: 'v-text-field'
      }
    }),

    computed: {
      ...mapState('data', ['isEditing', 'item', 'scaffold']),
      fields () {
        return this.scaffold.fields || []
      },
      internalValue: {
        get () {
          return this.item
        },
        set (val) {
          this.setItem(Object.assign({}, val))
        }
      }
    },

    methods: {
      ...mapActions('data', ['saveItem', 'setItems', 'updateItem']),
      ...mapMutations('data', {
        setIsEditing: 'SET_IS_EDITING',
        resetItem: 'RESET_ITEM'
      }),
      action () {
        this.isEditing
          ? this.updateItem()
          : this.saveItem()

        this.setIsEditing(true)
      },
      camelCase,
      getModel (field) {
        return camelCase(field.label)
      },
      passesConditional (conditions) {
        const target = this.scaffold.data.find(t => {
          return t.id === conditions.target.id
        }) || {}

        if (['<', '<=', '=', '>=', '>'].includes(conditions.attribute)) {
          // TODO: Implement
        } else {
          return this.item[target.label] === conditions.option
        }

        return false
      },
      reset () {
        this.setIsEditing(false)
        this.resetItem()
      }
    }
  }
</script>
