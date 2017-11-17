<template lang="pug">

  h2.headline.primary--text.mb-3(v-if="value" v-html="$t(value)")
  h2.headline.primary--text.mb-3(v-else)
    slot

</template>

<script>
  export default {
    name: 'section-heading',

    props: {
      value: String
    }
  }
</script>
