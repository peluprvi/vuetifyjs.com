<template>
  <v-card>
    <v-form>
      <v-container>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field
              label="Property Name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <core-card
              v-for="(field, i) in fields"
              :actions="actions"
              :key="field.id"
              class="mt-3"
              color="grey lighten-3"
              dense
              flat
              toolbar-color="primary"
            >
              <v-divider />
              <v-card-text>
                <form-create
                  :value="field"
                  @input="val => update(val, i)"
                />
              </v-card-text>
            </core-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <pre>{{ scaffold }}</pre>
    <v-card-text class="text-xs-center">
      <core-button
        @click="add"
      >Add</core-button>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <core-button @click="save">Save</core-button>
    </v-card-actions>
  </v-card>
</template>

<script>
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

    computed: {
      scaffold () {
        return this.fields.map((field, i) => {
          return Object.assign({}, field, { id: i + 1 })
        })
      }
    },

    methods: {
      add () {
        this.fields.push({ id: this.nonce })
        this.nonce++
      },
      remove (i) {
        this.fields.splice(i, 1)
      },
      save () {
        this.$http.post('crud', {
          file: 'data/data',
          scaffold: this.scaffold
        })
      },
      update (val, i) {
        this.fields.splice(i, 1, val)
      }
    }
  }
</script>
