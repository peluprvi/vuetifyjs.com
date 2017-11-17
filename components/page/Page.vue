<template lang="pug">

  v-container.page
    v-layout
      v-flex(xs12 md9)
        slot
        app-footer
      v-flex(md3 hidden-sm-and-down)
        app-table-of-contents(
          v-if="toc"
          threshold="50"
          offset="85"
          :items="$t(toc)"
        )
          //- app-ad(slot="top")

</template>

<script>

  export default {
    name: 'page',

    props: {
      toc: String
    }
  }

</script>

<style lang="stylus">
  .page
    max-width: 1185px !important
    padding-top: 75px
    padding-bottom: 0

    section
      margin-bottom: 48px
</style>
