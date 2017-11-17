<template lang="pug">

  div#introduction.mb-5
    h1.display-1.primary--text.mb-3(v-html="$t(title)")
    div(v-if="desc" v-html="$t(desc)")

</template>

<script>
  export default {
    name: 'page-introduction',

    props: {
      title: String,
      desc: String
    }
  }
</script>
