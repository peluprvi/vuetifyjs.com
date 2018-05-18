<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-card
        color="grey lighten-3"
        flat
      >
        <v-form ref="form">
          <v-container>
            <v-layout>
              <v-flex>
                <v-text-field
                  v-model="item.name"
                  label="Name"
                />
                <v-text-field
                  v-model="item.logo"
                  label="Logo"
                />
                <v-text-field
                  v-model="item.link"
                  label="Link"
                />
                <v-autocomplete
                  v-model="item.type"
                  :items="types"
                  label="Type"
                />
                <v-autocomplete
                  v-if="item.type === 'Patron'"
                  v-model="item.pledge"
                  :items="pledges"
                  label="Pledge Amount"
                  prefix="$"
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
    </v-flex>
    <v-flex xs12 mt-5>
      <v-data-table
        :items="supporters"
        :headers="headers"
      >
        <template
          slot="items"
          slot-scope="{ item, index }"
        >
          <td v-text="item.name" />
          <td>
            <a :href="item.link" target="blank">
              <span style="vertical-align: middle">Link</span>
              <v-icon small color="primary">mdi-open-in-new</v-icon>
            </a>
          </td>
          <td v-text="item.type" />
          <td>
            <span
              v-if="item.pledge"
              v-text="`$${item.pledge}`"
            />
            <span v-else>n/a</span>
          </td>
          <td class="text-xs-right">
            <v-btn
              class="mx-0"
              icon
              small
              @click="remove(item)"
            >
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
            <v-btn
              class="mx-0"
              icon
              small
              @click="edit(item, index)"
            >
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      headers: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Link',
          value: 'link'
        },
        {
          text: 'Type',
          value: 'type'
        },
        {
          text: 'Pledge',
          value: 'pledge'
        },
        {
          align: 'right',
          text: 'Actions',
          sortable: false,
          value: null
        }
      ],
      index: null,
      isEditing: false,
      item: {
        name: null,
        link: null,
        logo: null,
        pledge: null,
        type: null
      },
      pledges: [1500, 500, 250, 50],
      types: [
        'Patron',
        'Affiliate',
        'Service'
      ],
      supporters: []
    }),

    mounted () {
      this.getData()
    },

    methods: {
      action () {
        this.isEditing
          ? this.patch()
          : this.add()
      },
      add () {
        this.supporters.push(Object.assign({}, this.item))
        this.update()
      },
      edit (item, index) {
        this.item = Object.assign({}, item)
        this.index = index
        this.isEditing = true
      },
      patch () {
        this.supporters.splice(this.index, 1, Object.assign({}, this.item))
        this.index = null
        this.isEditing = false
        this.update()
      },
      remove (item) {
        this.supporters = this.supporters.filter(s => s.text !== item.text)

        this.update()
      },
      update () {
        this.$http.patch('company/supporters', this.supporters)
        this.$refs.form.reset()
      },
      async getData () {
        this.supporters = (await this.$http.get('company/supporters')).data
      }
    }
  }
</script>
