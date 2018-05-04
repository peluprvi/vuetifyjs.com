<template>
  <v-container grid-list-xl fluid>
    <v-layout wrap>
      <v-flex xs12>
        <v-input
          :append-icon-cb="appendIconCallback"
          :disabled="true"
          :hide-details="false"
          :loading="false"
          :persistent-hint="false"
          :prepend-icon-cb="prependIconCallback"
          :readonly="false"
          v-model="text"
          color="purple darken-2"
          append-icon="close"
          height="32px"
          hint=""
          prepend-icon="phone"
          tabindex="0"
        ></v-input>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        text: ''
      }
    },
    methods: {
      appendIconCallback () {},
      prependIconCallback () {}
    }
  }
</script>
