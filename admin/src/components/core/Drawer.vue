<template>
  <v-navigation-drawer
    :value="true"
    app
    stateless
  >
    <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon v-text="item.icon" />
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.text" />
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          icon: 'mdi-database-plus',
          text: 'Data',
          to: '/data'
        }
      ]
    })
  }
</script>
