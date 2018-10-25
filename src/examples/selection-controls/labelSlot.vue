<template>
  <v-container fluid>
    <v-checkbox v-model="checkbox">
      <div slot="label">
        I agree that
        <v-tooltip bottom>
          <a slot="activator" @click.stop target="_blank" href="http://vuetifyjs.com">Vuetify</a>
          Opens in new window
        </v-tooltip>
        is awesome
      </div>
    </v-checkbox>

    <v-radio-group v-model="radios">
      <div slot="label">Your favourite <strong>search engine</strong></div>
      <v-radio value="Google">
        <div slot="label">Of course it's <strong class="success--text">Google</strong></div>
      </v-radio>
      <v-radio value="Duckduckgo">
        <div slot="label">Definitely <strong class="primary--text">Duckduckgo</strong></div>
      </v-radio>
    </v-radio-group>

    <v-switch v-model="switchMe">
      <template slot="label">
        Turn on the progress: <v-progress-circular size="24" class="ml-2" :indeterminate="switchMe" :value="0"></v-progress-circular>
      </template>
    </v-switch>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        checkbox: false,
        radios: 'Duckduckgo',
        switchMe: false
      }
    }
  }
</script>
