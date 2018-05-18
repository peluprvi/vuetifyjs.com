<template>
  <section>
    <v-layout>
      <v-flex>
        <v-card>
          <v-toolbar
            card
          >
            <v-toolbar-title>Site Data</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-autocomplete
              v-model="item"
              :items="items"
              box
              class="mt-0"
              label="Data"
              hide-details
              return-object
            />
            <core-crud
              v-if="item"
              :value="item"
            />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
  export default {
    data: () => ({
      item: null,
      items: []
    }),

    async mounted () {
      const res = await this.$http.get('data/data', {
        params: { crud: true }
      })

      this.items = res.data
    }
  }
</script>
