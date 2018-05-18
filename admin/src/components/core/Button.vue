<script>
  import VBtn from 'vuetify/es5/components/VBtn'

  export default {
    extends: VBtn,
    props: {
      depressed: {
        default: true
      }
    }
  }
</script>
