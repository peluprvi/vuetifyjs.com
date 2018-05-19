<template>
  <v-card>
    <v-form>
      <v-container>
        <v-layout wrap>
          <v-flex xs12>
            <core-card
              v-for="(field, i) in fields"
              :actions="actions"
              :key="field.id"
              class="mt-3"
              color="grey lighten-3"
              dense
              flat
            >
              <v-divider />
              <v-card-text>
                <forms-field
                  :value="field"
                  @input="val => update(val, i)"
                />
              </v-card-text>
            </core-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-card-text class="text-xs-center">
      <core-button
        @click="add"
      >Add</core-button>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <core-button @click="setData">Save</core-button>
    </v-card-actions>
  </v-card>
</template>

<script>
  // Utilities
  import {
    mapActions
  } from 'vuex'

  export default {
    data: vm => ({
      actions: [
        {
          icon: 'mdi-delete',
          handler: vm.remove
        }
      ],
      fields: [{}],
      nonce: 1
    }),

    props: {
      data: {
        type: Array,
        default: () => ([])
      }
    },

    computed: {
      scaffold () {
        return this.fields.map((field, i) => {
          return Object.assign({}, field, { id: i + 1 })
        })
      }
    },

    created () {
      if (this.data) this.fields = this.data
    },

    methods: {
      ...mapActions('scaffold', ['setData']),
      add () {
        this.fields.push({ id: this.nonce })
        this.nonce++
      },
      remove (i) {
        this.fields.splice(i, 1)
      },
      update (val, i) {
        this.fields.splice(i, 1, val)
      }
    }
  }
</script>
