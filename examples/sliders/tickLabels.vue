<template>
  <v-card>
    <v-card-text>
      <v-slider :tick-labels="labels" :max="3" always-dirty></v-slider>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        labels: ['Spring', 'Summer', 'Fall', 'Winter']
      }
    }
  }
</script>
