<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>Normal with hint text</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (show1 = !show1)"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          counter
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>Visible</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          :append-icon="show2 ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (show2 = !show2)"
          :type="show2 ? 'text' : 'password'"
          name="input-10-2"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          value="wqfasds"
          class="input-group--focused"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>Not visible</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          :append-icon="show3 ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (show3 = !show3)"
          :type="show3 ? 'text' : 'password'"
          name="input-10-2"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          value="wqfasds"
          class="input-group--focused"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>Error</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          :append-icon="show4 ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (show4 = !show4)"
          :rules="[() => ('The email and password you entered don\'t match')]"
          :type="show4 ? 'text' : 'password'"
          name="input-10-2"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          value="Pa"
          error
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password'
      }
    }
  }
</script>
