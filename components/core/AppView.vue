<template lang="pug">
  v-content
    v-fade-transition(mode="out-in")
      router-view(:key="$route.fullPath")
</template>

<script>
  export default{
    name: 'app-view'
  }
</script>
