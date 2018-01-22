<template>
  <v-footer height="auto" class="d-block">
    <v-card flat tile>
      <v-card-text class="white--text grey darken-2 ">
        <v-layout>
          <v-flex
            v-for="(col, i) in rows"
            :key="i"
            xs3
          >
            <span class="body-2" v-text="col.title.toUpperCase()"></span>
            <div
              v-for="(child, i) in col.children"
              :key="i"
              v-text="child"
            ></div>
          </v-flex>
        </v-layout>
        <div class="white--text text-xs-center">
          Register for free
          <v-btn color="red accent-3" dark round large>
            <v-icon dark></v-icon>SIGN UP!
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="white--text mx-3" fab color="blue">
            <v-icon size="18px">fa-facebook</v-icon>
          </v-btn>
          <v-btn class="white--text mx-3" fab color="teal">
            <v-icon size="18px">fa-twitter</v-icon>
          </v-btn>
          <v-btn class="white--text mx-3" fab color="green">
            <v-icon size="18px">fa-google-plus</v-icon>
          </v-btn>
          <v-btn class="white--text mx-3" fab color="red">
            <v-icon size="18px">fa-linkedin</v-icon>
          </v-btn>
          <v-btn class="white--text mx-3" fab color="pink">
            <v-icon size="18px">fa-instagram</v-icon>
          </v-btn>
        </div>
      </v-card-text>
      <v-card-actions class="white--text grey darken-3">
        <v-spacer></v-spacer>
        <span>&copy; 2018 Copyright:</span>
          <strong class="white--text">Vuetifyjs.com</strong>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      rows: [
        {
          title: 'FOOTER CONTENT',
          children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
        },
        {
          title: 'LINKS',
          children: ['Link 1', 'Link 2', 'Link 3', 'Link 4']
        },
        {
          title: 'LINKS',
          children: ['Link 1', 'Link 2', 'Link 3', 'Link 4']
        },
        {
          title: 'LINKS',
          children: ['Link 1', 'Link 2', 'Link 3', 'Link 4']
        }
      ]
    })
  }
</script>
