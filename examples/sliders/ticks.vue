<template>
  <v-card>
    <v-card-text>
      <h3>Show ticks when using slider</h3>
      <v-slider v-model="value" step="10" ticks></v-slider>
      <h3>Always show ticks</h3>
      <v-slider v-model="value" step="10" ticks="always"></v-slider>
      <h3>Tick size</h3>
      <v-slider v-model="value" step="10" ticks="always" tick-size="2"></v-slider>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        value: 0
      }
    }
  }
</script>
