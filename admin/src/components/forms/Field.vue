<template>
  <div>
    <v-text-field
      v-model="internalValue.label"
      label="Label"
      hide-details
    />

    <v-autocomplete
      v-model="internalValue.type"
      :items="types"
      label="Type"
      hide-details
    />

    <v-autocomplete
      v-if="isSelect"
      v-model="internalValue.attrs.items"
      label="Options"
      hide-details
      small-chips
      tags
    />

    <v-container
      grid-list-lg
      pa-0
    >
      <v-layout>
        <v-flex xs3>
          <v-switch
            v-model="internalValue.conditional"
            hide-details
            label="Conditional"
          />
        </v-flex>
        <v-flex xs9 v-if="internalValue.conditional">
          <v-form ref="conditional">
            <v-layout>
              <v-flex xs4>
                <v-autocomplete
                  :items="siblings"
                  v-model="internalValue.sibling"
                  hide-details
                  label="Sibling"
                  item-text="label"
                  return-object
                />
              </v-flex>
              <!-- If we have selected a sibling -->
              <v-flex xs4 v-if="internalValue.sibling">
                <v-autocomplete
                  v-model="internalValue.attribute"
                  :items="getSiblingAttributes(internalValue.sibling.attrs)"
                  :key="internalValue.sibling.id"
                  hide-details
                  label="Attribute"
                />
              </v-flex>
              <template v-if="internalValue.attribute">
                <v-flex xs4 v-if="!internalValue.sibling.attrs.items">
                  <v-text-field
                    v-model="internalValue.option"
                    hide-details
                    label="Comparison"
                  />
                </v-flex>
                <v-flex xs4 v-else>
                  <v-autocomplete
                    v-model="internalValue.option"
                    :items="internalValue.sibling.attrs.items"
                    hide-details
                    label="Option"
                    item-text="label"
                  />
                </v-flex>
              </template>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => ([])
      },
      value: {
        type: Object,
        default: () => ({})
      }
    },

    data: vm => ({
      internalValue: Object.assign({
        attrs: {},
        attribute: null,
        conditional: false,
        option: null
      }, vm.value),
      types: [
        'autocomplete',
        'text',
        'select'
      ]
    }),

    computed: {
      isSelect () {
        return this.checkSelect(this.internalValue.type)
      },
      siblings () {
        return this.items.filter(i => i.id !== this.value.id)
      }
    },

    watch: {
      internalValue: {
        deep: true,
        handler (val) {
          this.$emit('input', val)
        }
      },
      'internalValue.conditional' () {
        this.$refs.conditional.reset()
      }
    },

    methods: {
      checkSelect (val) {
        return ['autocomplete', 'selected'].includes(val)
      },
      getSiblingAttributes (attrs) {
        const options = Object.keys(attrs)

        return options.length > 0
          ? options
          : ['<', '<=', '>=', '>', '=']
      }
    }
  }
</script>
