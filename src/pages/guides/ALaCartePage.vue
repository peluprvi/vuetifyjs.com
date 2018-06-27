<template lang="pug">
  doc-view
    section-text(slot="sup" :value="`Guides.ALaCarte.headerText2`")
    template(slot-scope="{ namespace }")
      textarea(
        :style="{ position: 'absolute', left: '-1000px', top: '-1000px' }"
        :value="copy"
        ref="copy"
      )
      section#importing-components
        section-head(:value="`${namespace}.importHeader`")
        section-text(:value="`${namespace}.importText1`")
        markup(lang="js")
          |// .babelrc
          |["transform-imports", {
          |  "vuetify": {
          |    "transform": "vuetify/es5/components/${member}",
          |    "preventFullImport": true
          |  }
          |}]
        app-alert(:value="`${namespace}.alert2`" error)
        markup(lang="js")
          |// main.js
          |import Vue from 'vue'
          |import App from './App.vue'
          |import {
          |  Vuetify, // required
          |  VApp, // required
          |  VNavigationDrawer,
          |  VFooter,
          |  VToolbar,
          |  transitions
          |} from 'vuetify'
          |import { Ripple } from 'vuetify/es5/directives'
          |
          |Vue.use(Vuetify, {
          |   components: {
          |     VApp,
          |     VNavigationDrawer,
          |     VFooter,
          |     VToolbar,
          |     transitions
          |   },
          |   directives: {
          |     Ripple
          |   }
          |})
        app-alert(:value="`${namespace}.alert3`" info)
        section-text(:value="`${namespace}.importText2`")
        markup(lang="js")
          |// main.js
          |// Without `transform-imports` package
          |import Vue from 'vue'
          |import VApp from 'vuetify/es5/components/VApp'
          |import Vuetify from 'vuetify/es5/components/Vuetify'
          |import transitions from 'vuetify/es5/components/transitions'
          |import directives from 'vuetify/es5/directives'
          |
          |Vue.use(Vuetify, {
          |   components: {
          |      VApp,
          |      Vuetify
          |   },
          |   directives,
          |   transitions,
          |})
        section-text(:value="`${namespace}.importText3`")
        markup(lang="js")
          |// .vue files
          |import * as VCard from 'vuetify/es5/components/VCard'
          |
          |export default {
          |  components: {
          |    ...VCard
          |  }
          |}

      section#required-styles
        section-head(:value="`${namespace}.styleHeader`")
        section-text(:value="`${namespace}.styleText1`")
        markup(lang="cli")
          |$ npm install --save-dev stylus stylus-loader
          |# or
          |$ yarn add --dev stylus stylus-loader
        section-text(:value="`${namespace}.styleText2`")
        markup(lang="js")
          |// src/main.js
          |require('vuetify/src/stylus/app.styl')

      section#component-name-list
        section-head(:value="`${namespace}.componentNameListHeader`")
        section-text(:value="`${namespace}.componentNameListText1`")
        v-card
          v-card-title
            v-spacer
            v-text-field(
              append-icon="search"
              label="Search"
              single-line
              hide-details
              v-model="search"
            )
          v-data-table(
              :headers="headers"
              :items="items"
              :customFilter="customFilter"
              :search="search"
              v-model="selected"
              item-key="name"
              select-all
              class="elevation-1"
            )
            template(slot="headerCell" slot-scope="props")
              v-tooltip(lazy bottom)
                span(slot="activator") {{ props.header.text }}
                span {{ props.header.text }}
            template(slot="items" slot-scope="props")
              td
                v-checkbox(
                  primary
                  hide-details
                  v-model="props.selected"
                )
              td(class="text-xs-right") {{ props.item.name }}
              td(class="text-xs-right") {{ props.item.component }}
            template(slot="footer")
              td(colspan="3")
                v-layout(align-center)
                  div
                    v-switch(
                      label="ES5"
                      v-model="es5"
                      hide-details
                    )
                  v-flex
                    v-btn(
                      color="primary"
                      flat
                      @click="copyMarkup"
                      slot="activator"
                    )
                      | Copy markup
                      v-icon(right) content_copy
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        pagination: {},
        selected: [],
        headers: [
          { text: 'Markup', value: 'name' },
          { text: 'Component Name', value: 'component' }
        ],
        es5: false,
        // component list.
        items: [
          { value: false, name: 'v-alert', component: 'VAlert', group: 'VAlert' },
          { value: false, name: 'v-app', component: 'VApp', group: 'VApp' },
          { value: false, name: 'v-autocomplete', component: 'VAutocomplete', group: 'VAutocomplete' },
          { value: false, name: 'v-avatar', component: 'VAvatar', group: 'VAvatar' },
          { value: false, name: 'v-badge', component: 'VBadge', group: 'VBadge' },
          { value: false, name: 'v-bottom-nav', component: 'VBottomNav', group: 'VBottomNav' },
          { value: false, name: 'v-bottom-sheet', component: 'VBottomSheet', group: 'VBottomSheet' },
          { value: false, name: 'v-breadcrumbs', component: 'VBreadcrumbs', group: 'VBreadcrumbs' },
          { value: false, name: 'v-breadcrumbs-item', component: 'VBreadcrumbsItem', group: 'VBreadcrumbs' },
          { value: false, name: 'v-btn', component: 'VBtn', group: 'VBtn' },
          { value: false, name: 'v-btn-toggle', component: 'VBtnToggle', group: 'VBtnToggle' },
          { value: false, name: 'v-card', component: 'VCard', group: 'VCard' },
          { value: false, name: 'v-card-title', component: 'VCardTitle', group: 'VCard' },
          { value: false, name: 'v-card-media', component: 'VCardMedia', group: 'VCard' },
          { value: false, name: 'v-carousel', component: 'VCarousel', group: 'VCarousel' },
          { value: false, name: 'v-checkbox', component: 'VCheckbox', group: 'VCheckbox' },
          { value: false, name: 'v-chip', component: 'VChip', group: 'VChip' },
          { value: false, name: 'v-combobox', component: 'VCombobox', group: 'VCombobox' },
          { value: false, name: 'v-counter', component: 'VCounter', group: 'VCounter' },
          { value: false, name: 'v-data-iterator', component: 'VDataIterator', group: 'VDataIterator' },
          { value: false, name: 'v-data-table', component: 'VDataTable', group: 'VDataTable' },
          { value: false, name: 'v-date-picker', component: 'VDatePicker', group: 'VDatePicker' },
          { value: false, name: 'v-dialog', component: 'VDialog', group: 'VDialog' },
          { value: false, name: 'v-divider', component: 'VDivider', group: 'VDivider' },
          { value: false, name: 'v-edit-dialog', component: 'VEditDialog', group: 'VDataTable' },
          { value: false, name: 'v-expansion-panel', component: 'VExpansionPanel', group: 'VExpansionPanel' },
          { value: false, name: 'v-expansion-panel-content', component: 'VExpansionPanelContent', group: 'VExpansionPanel' },
          { value: false, name: 'v-footer', component: 'VFooter', group: 'VFooter' },
          { value: false, name: 'v-form', component: 'VForm', group: 'VForm' },
          { value: false, name: 'v-layout', component: 'VLayout', group: 'VGrid' },
          { value: false, name: 'v-flex', component: 'VFlex', group: 'VGrid' },
          { value: false, name: 'v-container', component: 'VContainer', group: 'VGrid' },
          { value: false, name: 'v-content', component: 'VContent', group: 'VGrid' },
          { value: false, name: 'v-icon', component: 'VIcon', group: 'VIcon' },
          { value: false, name: 'v-input', component: 'VInput', group: 'VInput' },
          { value: false, name: 'v-jumbotron', component: 'VJumbotron', group: 'VJumbotron' },
          { value: false, name: 'v-label', component: 'VLabel', group: 'VLabel' },
          { value: false, name: 'v-list', component: 'VList', group: 'VList' },
          { value: false, name: 'v-list-group', component: 'VListGroup', group: 'VList' },
          { value: false, name: 'v-list-tile', component: 'VListTile', group: 'VList' },
          { value: false, name: 'v-list-tile-action', component: 'VListTileAction', group: 'VList' },
          { value: false, name: 'v-list-tile-action-text', component: 'VListTileActionText', group: 'VList' },
          { value: false, name: 'v-list-tile-avatar', component: 'VListTileAvatar', group: 'VList' },
          { value: false, name: 'v-list-tile-content', component: 'VListTileContent', group: 'VList' },
          { value: false, name: 'v-list-tile-sub-title', component: 'VListTileSubTitle', group: 'VList' },
          { value: false, name: 'v-list-tile-title', component: 'VListTileTitle', group: 'VList' },
          { value: false, name: 'v-menu', component: 'VMenu', group: 'VMenu' },
          { value: false, name: 'v-messages', component: 'VMessages', group: 'VMessages' },
          { value: false, name: 'v-navigation-drawer', component: 'VNavigationDrawer', group: 'VNavigationDrawer' },
          { value: false, name: 'v-overflow-btn', component: 'VOverflowBtn', group: 'VOverflowBtn' },
          { value: false, name: 'v-pagination', component: 'VPagination', group: 'VPagination' },
          { value: false, name: 'v-parallax', component: 'VParallax', group: 'VParallax' },
          { value: false, name: 'v-progress-circular', component: 'VProgressCircular', group: 'VProgressCircular' },
          { value: false, name: 'v-progress-linear', component: 'VProgressLinear', group: 'VProgressLinear' },
          { value: false, name: 'v-radio', component: 'VRadio', group: 'VRadioGroup' },
          { value: false, name: 'v-radio-group', component: 'VRadioGroup', group: 'VRadioGroup' },
          { value: false, name: 'v-range-slider', component: 'VRangeSlider', group: 'VRangeSlider' },
          { value: false, name: 'v-select', component: 'VSelect', group: 'VSelect' },
          { value: false, name: 'v-slider', component: 'VSlider', group: 'VSlider' },
          { value: false, name: 'v-snackbar', component: 'VSnackbar', group: 'VSnackbar' },
          { value: false, name: 'v-speed-dial', component: 'VSpeedDial', group: 'VSpeedDial' },
          { value: false, name: 'v-stepper', component: 'VStepper', group: 'VStepper' },
          { value: false, name: 'v-stepper-content', component: 'VStepperCotent', group: 'VStepper' },
          { value: false, name: 'v-stepper-step', component: 'VStepperStep', group: 'VStepper' },
          { value: false, name: 'v-subheader', component: 'VSubheader', group: 'VSubheader' },
          { value: false, name: 'v-switch', component: 'VSwitch', group: 'VSwitch' },
          { value: false, name: 'v-system-bar', component: 'VSystemBar', group: 'VSystemBar' },
          { value: false, name: 'v-tabs', component: 'VTabs', group: 'VTabs' },
          { value: false, name: 'v-tab', component: 'VTab', group: 'VTabs' },
          { value: false, name: 'v-tabs-slider', component: 'VTabsSlider', group: 'VTabs' },
          { value: false, name: 'v-tabs-items', component: 'VTabsItems', group: 'VTabs' },
          { value: false, name: 'v-tab-item', component: 'VTabItem', group: 'VTabs' },
          { value: false, name: 'v-text-field', component: 'VTextField', group: 'VTextField' },
          { value: false, name: 'v-time-picker', component: 'VTimePicker', group: 'VTimePicker' },
          { value: false, name: 'v-toolbar', component: 'VToolbar', group: 'VToolbar' },
          { value: false, name: 'v-toolbar-side-icon', component: 'VToolbarSideIcon', group: 'VToolbar' },
          { value: false, name: 'v-tooltip', component: 'VTooltip', group: 'VTooltip' },
          { value: false, name: 'transitions', component: 'transitions', group: 'transitions' }
        ]
      }
    },
    computed: {
      copy () {
        return this.generateCustomComponent()
      },
      isGroup () {
        const isGroup = {}
        this.items.forEach(({ group }) => isGroup[group] = (group in isGroup) ? isGroup[group] + 1 : 0)
        return isGroup
      }
    },
    methods: {
      customFilter (items, search, filter) {
        if (!search) return items
        search = search.toString().toLowerCase()

        return items.filter(item => (
          filter(item['name'], search) || filter(item['component'], search) || filter(item['group'], search)
        ))
      },
      generateCustomComponent () {
        const components = {}
        this.selected.forEach(({ group }) => {
          components[group] = this.isGroup[group] ? `...${group}` : group
        })

        if (this.es5) {
          return `import Vue from 'vue';
import Vuetify from 'vuetify/es5/components/Vuetify';
${Object.keys(components).map(c => 'import ' + c + " from 'vuetify/es5/components/" + c + "';").join('\n')}

Vue.use(Vuetify, {
  components: {
${Object.values(components).map(c => `    ${c}`).join(',\n')}
  }
});`
        } else {
          return `import Vue from 'vue';
import { Vuetify, ${Object.keys(components).join(', ')} } from 'vuetify';
Vue.use(Vuetify, {
  components: {
${Object.values(components).map(c => `    ${c}`).join(',\n')}
  }
});`
        }

      },
      copyMarkup () {
        this.$refs.copy.select()
        document.execCommand('copy')
      }
    }
  }
</script>
