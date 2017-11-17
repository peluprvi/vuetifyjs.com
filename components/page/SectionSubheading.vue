<template lang="pug">

  h3.py-3(v-if="value" v-html="$t(value)")
  h3.py-3(v-else)
    slot

</template>

<script>
  export default {
    name: 'section-subheading',

    props: {
      value: String
    }
  }
</script>
