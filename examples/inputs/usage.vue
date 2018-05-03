<template>
  <v-container grid-list-xl fluid>
    <v-layout wrap>
      <v-flex xs12>
        <v-input
          color="purple darken-2"
          append-icon="close"
          :append-icon-cb="appendIconCallback"
          :disabled="true"
          height="32px"
          :hide-details="false"
          hint=""
          :loading="false"
          :persistent-hint="false"
          prepend-icon="phone"
          :prepend-icon-cb="prependIconCallback"
          :readonly="false"
          tabindex="0"
          v-model="text"
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
