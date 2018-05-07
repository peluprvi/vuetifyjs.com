<template>
  <v-card>
    <v-card-text>
      <v-slider v-model="slider" :min="-10" :max="10" :label="`${slider}`"></v-slider>
      <v-range-slider v-model="slider2" :min="-10" :max="10" :label="`${slider2}`"></v-range-slider>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        slider: 0,
        slider2: [-1, 1]
      }
    }
  }
</script>
