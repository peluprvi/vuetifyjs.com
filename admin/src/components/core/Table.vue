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
          v-for="(field, i) in fields"
          :key="i"
          v-text="item[field]"
        />
        <td class="text-xs-right">
          <v-btn
            small
            icon
            @click="$emit('edit', item)"
          >
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
            small
            icon
            @click="$emit('remove', item)"
          >
            <v-icon small>mdi-delete</v-icon>
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

        headers.push({
          align: 'right',
          text: 'Actions',
          sortable: false
        })

        return headers
      }
    }
  }
</script>
