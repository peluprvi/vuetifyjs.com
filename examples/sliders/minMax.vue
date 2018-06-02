<template>
  <v-card flat color="transparent">

    <v-subheader>Min and max default slider</v-subheader>
    <v-card-text>
      <v-layout row>
        <v-flex class="pr-3">
          <v-slider
            v-model="slider"
            :min="min"
            :max="max"
          ></v-slider>
        </v-flex>
        <v-flex shrink style="width: 60px">
          <v-text-field
            v-model="slider"
            type="number"
            hide-details
            single-line
            class="mt-0"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-card-text>

    <v-subheader>Min and max range slider</v-subheader>
    <v-card-text>
      <v-layout row>
        <v-flex shrink style="width: 60px">
          <v-text-field
            v-model="range[0]"
            type="number"
            hide-details
            single-line
            class="mt-0"
          ></v-text-field>
        </v-flex>
        <v-flex class="px-3">
          <v-range-slider
            v-model="range"
            :min="min"
            :max="max"
          ></v-range-slider>
        </v-flex>
        <v-flex shrink style="width: 60px">
          <v-text-field
            v-model="range[1]"
            type="number"
            hide-details
            single-line
            class="mt-0"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-card-text>

  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        min: -50,
        max: 90,
        slider: 40,
        range: [-20, 70]
      }
    }
  }
</script>
