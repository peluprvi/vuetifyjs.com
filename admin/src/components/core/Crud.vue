<template>
  <v-card
    color="grey lighten-3"
    flat
  >
    <v-form ref="form">
      <v-container>
        <v-layout>
          <v-flex>
            <component
              v-for="(field, i) in value.data"
              :is="types[field.type]"
              :key="i"
              :label="field.label"
              v-bind="field.attrs"
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
        @click="isEditing = false"
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
  export default {
    props: {
      value: {
        type: Object,
        default: () => ({})
      }
    },

    data: () => ({
      isEditing: false,
      types: {
        text: 'v-text-field'
      }
    }),

    computed: {
      fields () {
        return this.value.fields || []
      }
    },

    methods: {
      action () {

      }
    }
  }
</script>
