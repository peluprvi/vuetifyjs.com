<template>
  <section>
    <core-table
      @create="create"
    />

    <core-dialog
      v-model="dialog"
    >
      <v-card-text>

      </v-card-text>
    </core-dialog>
  </section>
</template>

<script>
  export default {
    data: () => ({
      dialog: false
    }),

    methods: {
      create () {
        this.dialog = true
      }
    }
  }
</script>
