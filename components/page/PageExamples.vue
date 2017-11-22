<template lang="pug">

  section#examples
    section-heading(value="Generic.ComponentPage.examples")

    example(
      v-for="(example, i) in files"
      :key="i"

      :id="`example-${i + 1}`"
      :header="`${genHeader(example)}`"
      :desc="`${genDesc(example)}`"
      :file="`${folder}/${example.file}`"
      :newIn="example.new"
    )

</template>

<script>

  export default {
    name: 'page-examples',

    props: {
      folder: String,
      files: Array
    },

    computed: {
      capitalized () {
        return this.folder.charAt(0).toUpperCase() + this.folder.slice(1)
      }
    },

    methods: {
      genHeader (example) {
        return this.$t(`Examples.${this.capitalized}.${example.file}.header`)
      },
      genDesc (example) {
        return this.$t(`Examples.${this.capitalized}.${example.file}.desc`)
      }
    }
  }

</script>
