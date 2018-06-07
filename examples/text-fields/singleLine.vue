<template>
  <v-form>
    <v-container>
      <v-layout>
        <v-flex xs12 md6>
          <v-text-field
            label="Regular"
            single-line
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field
            label="Solo"
            solo
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field
            box
            label="Box"
            single-line
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field
            label="Outline"
            outline
            single-line
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
