<template>
  <v-card>
    <v-card-text>
      <v-range-slider v-model="value1" step="0"></v-range-slider>
      <v-range-slider v-model="value2" step="0" disabled></v-range-slider>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        value1: [30, 60],
        value2: [0, 40]
      }
    }
  }
</script>
