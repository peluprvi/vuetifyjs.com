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
    <v-autocomplete
      v-if="isSelect"
      v-model="internalValue.attrs.items"
      label="Options"
      small-chips
      tags
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
      internalValue: Object.assign({ attrs: {} }, vm.value),
      types: [
        'autocomplete',
        'text',
        'select'
      ]
    }),

    computed: {
      isSelect () {
        return ['autocomplete', 'selected'].includes(this.internalValue.type)
      }
    },

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
