<template lang="pug">

  section#usage
    section-heading(value="Generic.ComponentPage.usage")
    component-example(
      :id="id"
      :file="file"
      :new-in="newIn"
      :desc="desc"
    )

</template>

<script>
  export default {
    name: 'page-usage',

    props: {
      id: String,
      file: String,
      newIn: String,
      desc: String
    }
  }
</script>
