<template>
  <v-footer height="auto" class="d-block" >
    <v-flex xs12 text-xs-center>
      <v-card flat tile class="white--text grey darken-3">
          <v-card-text>
            <v-layout row >
              <v-flex
               v-for="link in links"
               :key="link"
               xs3
              >
              <span class="body-2" v-text="link.toUpperCase()"></span>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-text>
            <v-spacer></v-spacer>
            <span>&copy; 2018 Copyright:</span>
            <strong >Vuetifyjs.com</strong>
            <v-spacer></v-spacer>
          </v-card-text>
      </v-card>
    </v-flex >
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
    })
  }
</script>
