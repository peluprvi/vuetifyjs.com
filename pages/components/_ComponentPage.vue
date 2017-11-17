<template lang="pug">

  page(
    :id="`${current}-component`"
    toc="Generic.ComponentPage.toc"
  )
    page-introduction(
      :title="`Components.${current}.header`"
      :desc="`Components.${current}.headerText`"
    )

    page-usage
    page-api
    page-examples

</template>

<script>
  export default {
    computed: {
      current () {
        let name = this.$route.params.component
        return name.charAt(0).toUpperCase() + name.slice(1)
      },
      components () {
        return require('./components.json')
      }
    }
  }
</script>
