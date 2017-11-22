<template lang="pug">

  page(
    :id="`${current}-component`"
    toc="Generic.ComponentPage.toc"
  )
    page-introduction(
      :title="$t(`Components.${currentFormatted}.header`)"
      :desc="$t(`Components.${currentFormatted}.headerText`)"
    )
    page-usage(
      :desc="$t(`Examples.${currentFormatted}.${usageFile}.desc`)"
      :examplePath="`${currentFormatted}/${usageFile}`"
    )

    page-api(
      :component="currentData"
    )

    page-examples(
      :folder="currentFormatted"
      :files="currentData.examples"
    )

</template>

<script>
  import componentsData from './componentsData'

  export default {
    computed: {
      current () {
        return this.$route.params.component
      },
      currentFormatted () {
        return this.current
                      .split('-')
                      .map(el => el.charAt(0).toUpperCase() + el.slice(1))
                      .join('')
      },
      currentData () {
        return componentsData[this.current]
      },
      usageFile () {
        return componentsData[this.current].usage.file
      }
    }
  }
</script>
