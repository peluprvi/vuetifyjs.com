<template>
  <v-container fluid>
    <v-layout wrap>
      <v-flex xs12>
        <v-autocomplete
          v-model="select"
          :items="items"
          combobox
          label="Select a favorite activity or create a new one"
        ></v-autocomplete>
      </v-flex>
      <v-flex xs12>
        <v-autocomplete
          v-model="select"
          :items="items"
          chips
          combobox
          label="I use chips"
        ></v-autocomplete>
      </v-flex>
      <v-flex xs12>
        <v-autocomplete
          v-model="select"
          :items="items"
          chips
          combobox
          label="I use a scoped slot"
        >
          <template slot="selection" slot-scope="data">
            <v-chip
              :selected="data.selected"
              :disabled="data.disabled"
              :key="JSON.stringify(data.item)"
              class="v-chip--select-multi "
              @input="data.parent.selectItem(data.item)"
            >
              <v-avatar class="accent white--text">
                {{ data.item.slice(0, 1).toUpperCase() }}
              </v-avatar>
              {{ data.item }}
            </v-chip>
          </template>
        </v-autocomplete>
      </v-flex>
      <v-flex xs12>
        <v-autocomplete
          v-model="select"
          chips
          combobox
          label="I'm readonly"
          readonly
        ></v-autocomplete>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        select: 'Programming',
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify'
        ]
      }
    }
  }
</script>
