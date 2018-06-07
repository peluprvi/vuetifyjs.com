<template>
  <v-card>
    <v-toolbar
      card
      color="indigo"
      dark
    >
      <v-btn icon>
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Create new report</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="title"
          :rules="[v => v.length <= 25 || 'Max 25 characters']"
          counter="25"
          label="Title"
        ></v-text-field>
        <v-text-field
          v-model="blurb"
          :rules="[v => v.length <= 50 || 'Max 50 characters']"
          counter="50"
          label="Blurb"
        ></v-text-field>
        <v-textarea
          v-model="description"
          :rules="[v => v.length <= 256 || 'Max 50 characters']"
          auto-grow
          counter="256"
          label="Description"
          rows="3"
        ></v-textarea>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Preliminary report',
        blurb: 'Report describing the state of California',
        description: 'California is a state in the western United States. It is the third largest state in size. It is the state with the most people living in it. Important cities are Los Angeles, San Diego, San Jose, and San Francisco'
      }
    }
  }
</script>
