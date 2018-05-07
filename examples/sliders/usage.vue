<template>
  <v-card>
    <v-card-text>
      <v-slider v-model="value1" label="Normal"></v-slider>
      <v-slider v-model="value2" label="Disabled" disabled></v-slider>
      <v-range-slider v-model="value3" label="Range"></v-range-slider>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        value1: 10,
        value2: 30,
        value3: [20, 60]
      }
    }
  }
</script>
