<template>
  <v-card
    v-bind="$attrs"
  >
    <v-toolbar
      v-if="title || actions.length"
      :color="toolbarColor"
      :dark="!!toolbarColor"
      :dense="dense"
      card
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        v-for="(action, i) in actions"
        :key="i"
        @click="action.handler"
        icon
      >
        <v-icon v-text="action.icon" />
      </v-btn>
    </v-toolbar>
    <slot />
  </v-card>
</template>

<script>
  export default {
    inheritAttrs: false,

    props: {
      actions: {
        type: Array,
        default: () => ([])
      },
      dense: Boolean,
      title: String,
      toolbarColor: String
    }
  }
</script>
