<template>
  <div>
    <v-date-picker
      v-model="dates"
      multiple
    ></v-date-picker>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dates: ['2018-09-15', '2018-09-20']
    })
  }
</script>
