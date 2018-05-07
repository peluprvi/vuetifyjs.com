<template>
  <v-card>
    <v-card-text>
      <v-slider v-model="value" thumb-label>
        <span slot="thumb-label" slot-scope="props">${{ props.value }}</span>
      </v-slider>
      <v-slider v-model="value" thumb-label="always" always-dirty>
        <v-btn
          slot="thumb-label"
          slot-scope="props"
          color="primary"
          depressed
        >
          {{ props.value }}
        </v-btn>
      </v-slider>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        value: 30
      }
    }
  }
</script>
