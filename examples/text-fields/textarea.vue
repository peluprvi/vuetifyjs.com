<template>
  <div>
    <v-card color="grey lighten-4" flat>
      <v-card-text>
        <v-subheader>Light Theme</v-subheader>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-textarea
                name="input-1"
                label="Label Text"
              ></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
    <v-card color="grey darken-3" flat>
      <v-card-text>
        <v-subheader dark>Dark Theme</v-subheader>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-textarea
                name="input-1"
                label="Label Text"
                dark
              ></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>
