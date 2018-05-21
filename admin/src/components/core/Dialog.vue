<template>
  <v-dialog
    v-model="internalValue"
    v-bind="$attrs"
    v-on="$listeners"
    max-width="500"
  >
    <core-card
      title="Dialog"
    >
      <slot />
    </core-card>
  </v-dialog>
</template>

<script>
  export default {
    inheritAttrs: false,

    props: {
      value: Boolean
    },

    computed: {
      internalValue: {
        get () {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    }
  }
</script>
