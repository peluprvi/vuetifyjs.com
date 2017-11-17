<template lang="pug">

  page(
    :id="`${current}-component`"
    toc="Generic.ComponentPage.toc"
  )
    page-introduction(
      :title="`Components.${capitalized}.header`"
      :desc="`Components.${capitalized}.headerText`"
    )

    page-usage(
      :desc="`Examples.${capitalized}.${file}.desc`"
      :examplePath="`${current}/${file}`"
    )

    page-api
    page-examples

</template>

<script>
  export default {
    computed: {
      current () {
        return this.$route.params.component
      },
      capitalized () {
        return this.current.charAt(0).toUpperCase() + this.current.slice(1)
      },
      components () {
        return require('./components.json')
      },
      file () {
        return this.components[this.current].usage.file
      }
    }
  }
</script>
