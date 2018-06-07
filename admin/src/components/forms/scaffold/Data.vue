<template>
  <v-card flat>
    <v-form v-if="item.data.length">
      <v-container>
        <v-layout wrap>
          <v-flex xs12>
            <core-card
              v-for="(field, i) in item.data"
              :key="field.id"
              color="grey lighten-3"
              dense
              flat
              invert
            >
              <v-card-text>
                <forms-field
                  :items="item.data"
                  :value="field"
                  @input="val => update(val, i)"
                />
              </v-card-text>
              <v-card-actions class="grey lighten-2">
                <v-spacer />
                <v-btn
                  color="error"
                  depressed
                  small
                  @click="remove(i)"
                >Remove</v-btn>
              </v-card-actions>
            </core-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <v-card-text class="text-xs-center">
      <core-button
        @click="add"
      >
        Add
      </core-button>
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <core-button @click="action">
        {{ isEditing ? 'Update' : 'Save' }}
      </core-button>
    </v-card-actions>
  </v-card>
</template>

<script>
  // Utilities
  import {
    mapActions,
    mapState
  } from 'vuex'

  export default {
    data: vm => ({
      nonce: 1,
    }),

    computed: {
      ...mapState('scaffold', ['isEditing', 'item']),
    },

    created () {
      this.nonce = this.item.data.length + 1
    },

    methods: {
      ...mapActions('scaffold', ['saveItem', 'updateItem']),
      action () {
        this.isEditing
          ? this.updateItem()
          : this.saveItem()
      },
      add () {
        this.item.data.push({ id: this.nonce })
        this.nonce++
      },
      remove (i) {
        this.item.data.splice(i, 1)
      },
      update (val, i) {
        this.item.data.splice(i, 1, val)
      }
    }
  }
</script>
