<template>
  <v-navigation-drawer
    :value="true"
    app
    stateless
  >
    <v-list>
      <template
        v-for="(item, i) in items"
      >
        <v-list-group
          v-if="item.children"
          :key="`group-${i}`"
          :group="item.group"
          :prepend-icon="icons[`/${item.group}`]"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title v-text="item.text" />
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="`child-${i}`"
            :to="child.to"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="child.text" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile
          v-else
          :key="`tile-${i}`"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon v-text="icons[item.to]" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.text" />
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { capitalize } from 'lodash'

  const views = require.context('@/views', true, /\.vue$/)

  export default {
    data: () => ({
      icons: {
        '/home': 'mdi-speedometer',
        '/scaffold': 'mdi-library-plus',
        '/data': 'mdi-database-plus'
      },
      items: []
    }),

    mounted () {
      const items = []

      for (const view of views.keys()) {
        const item = this.genItem(view)

        if (!item.inGroup) {
          items.push(item)
        } else {
          let existingGroup = items.find(g => g.group === item.group)

          if (!existingGroup) {
            existingGroup = {
              text: capitalize(item.group),
              group: item.group,
              children: []
            }
            items.push(existingGroup)
          }

          existingGroup.children.push(item)
        }
      }

      this.items = items
    },

    methods: {
      genItem (view) {
        // Remove extension
        const split = view.split('.').slice(1, -1)
        const remove = split.join('').split('/').slice(1)
        const text = remove.slice(-1).join('')
        const group = remove[0]
        const to = split.join('/').toLowerCase()

        return {
          text,
          to,
          group,
          inGroup: remove.length > 1
        }
      }
    }
  }
</script>
