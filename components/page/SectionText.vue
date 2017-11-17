<template lang="pug">

  p.section-text(v-if="value" v-html="$t(value)")
  p.section-text(v-else)
    slot

</template>

<script>
  export default {
    name: 'section-text',

    props: {
      value: String
    }
  }
</script>
