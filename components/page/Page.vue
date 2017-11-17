<template lang="pug">

  v-container.page
    v-layout
      v-flex(xs12 md9)
        slot
        //- app-footer
      v-flex(md3 hidden-sm-and-down)
        strong ASIDE
        //- app-table-of-contents(
        //-   threshold="50"
        //-   offset="85"
        //-   :items="toc"
        //- )
        //-   app-ad(slot="top")

</template>

<script>

  export default {
    name: 'page',

    data () {
      return {

      }
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
