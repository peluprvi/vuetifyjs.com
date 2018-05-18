<template>
  <div>
    <v-text-field
      v-model="internalValue.label"
      label="Label"
    ></v-text-field>
    <v-autocomplete
      v-model="internalValue.type"
      :items="types"
      label="Type"
    ></v-autocomplete>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        default: () => ({})
      }
    },

    data: vm => ({
      internalValue: Object.assign({}, vm.value),
      types: [
        'autocomplete',
        'text',
        'select'
      ]
    }),

    watch: {
      internalValue: {
        deep: true,
        handler (val) {
          this.$emit('input', val)
        }
      }
    }
  }
</script>
