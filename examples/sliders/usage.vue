<template>
  <v-container fluid grid-list-lg>

    <v-layout row>
      <v-flex xs12>
        <v-slider
          v-model="slider"
        ></v-slider>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-slider
          v-model="slider"
          label="Label"
        ></v-slider>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-slider
          v-model="slider"
          label="Inverse label"
          inverse-label
        ></v-slider>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-slider
          v-model="volume"
          prepend-icon="volume_down"
          append-icon="volume_up"
        ></v-slider>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex shrink style="width: 60px">
        <v-text-field
          v-model="price[0]"
          type="number"
          hide-details
          single-line
          class="mt-0"
        ></v-text-field>
      </v-flex>
      <v-flex>
        <v-range-slider
          v-model="price"
          :step="10"
          :min="20"
          :max="600"
        ></v-range-slider>
      </v-flex>
      <v-flex shrink style="width: 60px">
        <v-text-field
          v-model="price[1]"
          type="number"
          hide-details
          single-line
          class="mt-0"
        ></v-text-field>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        slider: 45,
        volume: 10,
        price: [110, 440]
      }
    }
  }
</script>
