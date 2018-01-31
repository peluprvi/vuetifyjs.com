<template>
  <v-layout row>
    <v-flex xs4 offset-md4 offset-sm3>
      <v-card>
        <v-toolbar class="orange lighten-1" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>My List</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line class="orange lighten-2">
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              class="white--text">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
            <v-list-tile avatar v-else :key="item.title" >
              <v-list-tile-avatar >
                <img :src="item.avatar" >
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title" class="white--text"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle" class="white--text"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          header: 'Today'
        },
        {
          avatar: 'https://picsum.photos/250/300?image=1027',
          title: 'Meeting @ Noon',
          subtitle:
            "<span class='text--primary'>Spike Lee</span> &mdash; I'll be in your neighborhood"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://picsum.photos/250/300?image=821',
          title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
          subtitle:
            "<span class='text--primary'>to Operations support</span> &mdash; Wish I could come."
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://picsum.photos/250/300?image=783',
          title: 'Yes yes',
          subtitle:
            "<span class='text--primary'>Bella</span> &mdash; Do you have Paris recommendations"
        },
        {
          header: 'Tomorrow'
        },
        {
          avatar: 'https://picsum.photos/250/300?image=1006',
          title: 'Dinner tonight?',
          subtitle:
            "<span class='text--primary'>LaToya</span> &mdash; Do you want to hang out?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://picsum.photos/250/300?image=146',
          title: 'So long',
          subtitle:
            "<span class='text--primary'>Nancy</span> &mdash; Do you see what time it is?"
        },
        {
          header: 'Last Week'
        },
        {
          avatar: 'https://picsum.photos/250/300?image=1008',
          title: 'Breakfast?',
          subtitle:
            "<span class='text--primary'>LaToya</span> &mdash; Do you want to hang out?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://picsum.photos/250/300?image=839',
          title:
            'Winter Porridge <span class="grey--text text--lighten-1"></span>',
          subtitle:
            "<span class='text--primary'>cc: Daniel</span> &mdash; Tell me more..."
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://picsum.photos/250/300?image=145',
          title: 'Oui oui',
          subtitle:
            "<span class='text--primary'>Nancy</span> &mdash; Do you see what time it is?"
        }
      ]
    }
  }
}
</script>
