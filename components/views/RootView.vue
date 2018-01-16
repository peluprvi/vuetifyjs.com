<template>
  <router-view/>
</template>

<script>
  export default {
    props: {
      lang: {
        type: String,
        default: 'en'
      }
    }
  }
</script>
