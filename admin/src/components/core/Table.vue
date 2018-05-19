<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="items"
    >
      <template
        slot="items"
        slot-scope="{ item, index }"
      >
        <td
          v-text="index"
        />
        <td
          v-for="(field, i) in fields"
          :key="i"
          v-text="item[field]"
        />
        <td>
          <v-btn
            small
            icon
            @click="$emit('edit', index)"
          >
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import { capitalize } from 'lodash'

  export default {
    props: {
      fields: {
        type: Array,
        default: () => ([])
      },
      items: {
        type: Array,
        default: () => ([])
      }
    },

    computed: {
      headers () {
        const headers = this.fields.map(field => ({
          text: capitalize(field),
          value: field
        }))

        headers.unshift({
          text: 'Index',
          sortable: false
        })

        headers.push({
          text: 'Actions',
          sortable: false
        })

        return headers
      }
    }
  }
</script>
