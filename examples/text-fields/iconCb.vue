<template>
  <v-form>
    <v-container>
      <v-layout row wrap>

        <v-flex xs12>
          <v-text-field
            v-model="message"
            :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
            :append-icon-cb="toggleMarker"
            :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
            :append-outer-icon-cb="sendMessage"
            :clear-icon-cb="clearMessage"
            :prepend-icon="icon"
            :prepend-icon-cb="changeIcon"
            box
            clear-icon="mdi-close-circle"
            clearable
            label="Message"
            type="text"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        password: 'Password',
        show: false,
        message: 'Hey!',
        marker: true,
        iconIndex: 0,
        icons: [
          'mdi-emoticon',
          'mdi-emoticon-cool',
          'mdi-emoticon-dead',
          'mdi-emoticon-excited',
          'mdi-emoticon-happy',
          'mdi-emoticon-neutral',
          'mdi-emoticon-sad',
          'mdi-emoticon-tongue'
        ]
      }
    },

    computed: {
      icon () {
        return this.icons[this.iconIndex]
      }
    },

    methods: {
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1 ? this.iconIndex = 0 : this.iconIndex++
      }
    }
  }
</script>
