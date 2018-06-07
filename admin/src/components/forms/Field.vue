<template>
  <div>
    <v-container
      grid-list-lg
      pa-0
    >
      <v-layout align-center>
        <v-flex xs3>
          <v-switch
            v-model="internalValue.conditional"
            label="Conditional"
          />
        </v-flex>
        <v-flex xs9 v-if="internalValue.conditional">
          <v-layout>
            <v-flex xs4>
              <v-autocomplete
                :items="siblings"
                v-model="internalValue.conditions.target"
                hide-details
                label="Sibling"
                item-text="label"
                return-object
              />
            </v-flex>
            <!-- If we have selected a sibling -->
            <!-- Allow selection of an attribute -->
            <v-flex xs4 v-if="internalValue.conditions.target">
              <v-autocomplete
                v-model="internalValue.conditions.attribute"
                :items="getSiblingAttributes(internalValue.conditions)"
                :key="internalValue.conditions.target.id"
                hide-details
                label="Attribute"
              />
            </v-flex>
            <!-- Once an attribute has been selected -->
            <!-- Either display that fields attributes -->
            <!-- Or comparison operators -->
            <template v-if="internalValue.conditions.attribute">
              <v-flex xs4 v-if="!internalValue.conditions.target.attrs.items">
                <v-text-field
                  v-model="internalValue.conditions.option"
                  hide-details
                  label="Comparison"
                />
              </v-flex>
              <v-flex xs4 v-else>
                <v-autocomplete
                  v-model="internalValue.conditions.option"
                  :items="internalValue.conditions.target.attrs.items"
                  hide-details
                  label="Option"
                  item-text="label"
                />
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-text-field
      v-model="internalValue.label"
      label="Label"
      hide-details
    />

    <v-autocomplete
      v-model="internalValue.type"
      :items="fieldTypes"
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
        conditional: false,
        conditions: {}
      }, vm.value),
      fieldTypes: [
        'autocomplete',
        'text',
        'select',
        'switch'
      ],
      types: [
        'Array',
        'Boolean',
        'Object',
        'String'
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
      }
    },

    methods: {
      checkSelect (val) {
        return ['autocomplete', 'selected'].includes(val)
      },
      getSiblingAttributes (conditions) {
        const options = Object.keys(conditions.target.attrs)

        return options.length > 0
          ? options
          : ['<', '<=', '>=', '>', '=']
      }
    }
  }
</script>
