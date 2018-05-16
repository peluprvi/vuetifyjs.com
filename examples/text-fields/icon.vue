<template>
  <v-form>
    <v-text-field
      box
      label="Account name"
      prepend-icon="mdi-account-circle"
    ></v-text-field>
    <v-text-field
      box
      label="Email address"
      prepend-icon="mdi-at"
      hint="Valid Email address"
    ></v-text-field>
    <v-text-field
      :rules="[v => !!v && v.length >= 6 || 'Password too short!']"
      box
      hint="Password must be 6 characters long"
      label="Password"
      prepend-icon="mdi-textbox-password"
      type="password"
      validate-on-blur
    ></v-text-field>
  </v-form>
</template>
