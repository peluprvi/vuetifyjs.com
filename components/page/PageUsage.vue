<template lang="pug">

  section#usage
    section-heading(value="Generic.ComponentPage.usage")
    example(
      :desc="desc"
      :file="examplePath"
    )

</template>

<script>

  export default {
    name: 'page-usage',

    props: {
      desc: String,
      examplePath: String
    }
  }

</script>
