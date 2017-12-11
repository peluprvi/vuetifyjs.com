<template lang="pug">
  v-container(fluid)#generator
    v-layout(column align-center)
      div.pa-4
        v-btn(icon :disabled="current === 1" @click="current = current - 1")
          v-icon chevron_left
        span.body-2 {{ current }} / {{ total }}
        v-btn(icon :disabled="current === total" @click="current = current + 1")
          v-icon chevron_right
      component(:is="components[current - 1]" :dark="dark")
      v-btn(flat icon @click="dark = !dark")
        v-icon(:dark="dark") invert_colors
    v-navigation-drawer(fixed right app clipped)
      div.ma-2
        v-btn(block color="blue darken-2 white--text" @click.stop="dialog = true") EXPORT THEME
      v-list
        v-list-tile(active-class="highlight" :value="key === active" v-for="(value, key, i) in theme" :key="i" @click="active = key")
          v-list-tile-content
            v-list-tile-title(v-text="key")
          v-list-tile-action
            div(:class="['color', key, 'white--text', 'text-xs-center']") {{ value }}
      swatch-picker(class="swatch-picker" v-model="color" @input="change" :palette="palette")
    v-dialog(v-model="dialog" width="300px" content-class="generator-dialog")
      v-card
        v-card-text
          kbd {{ JSON.stringify(this.theme, null, 2) }}
        v-card-actions
          v-btn(block color="blue darken-2 white--text" flat="flat" @click.native="dialog = false") Close

</template>

<script>
  import { Swatches } from 'vue-color'
  import materialColors from '@/util/colors'
  import Components from '@/components/generator'

  export default {
    components: {
      'swatch-picker': Swatches
    },
    data() {
      return {
        dark: false,
        dialog: false,
        current: 1,
        total: Components.length,
        components: Components,
        active: 'primary',
        color: '',
        palette: materialColors,
        theme: {
          primary: materialColors[5][6],
          secondary: materialColors[5][10],
          accent: materialColors[3][5],
          error: materialColors[0][12],
          info: materialColors[5][12],
          success: materialColors[9][12],
          warning: materialColors[14][12]
        },
      }
    },
    watch: {
      active: {
        handler () {
          this.color = { hex: this.theme[this.active] }
        },
        immediate: true
      },
      theme: {
        handler () {
          this.$vuetify.theme = this.theme
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      change (value) {
        this.theme[this.active] = value.hex
      }
    }
  }
</script>

<style lang="stylus">
  #generator
    .navigation-drawer
      padding: 0 !important
      overflow: hidden !important

    .color
      width: 100px
      height: 20px

    .swatch-picker.vc-swatches
      height: calc(100% - 400px)
      width: 100%
      box-shadow: none;

    .component-card
      margin: 1rem;

    .highlight
      background: #ddd

  .generator-dialog
    kbd
      width: 100%
      padding: 1rem

</style>
