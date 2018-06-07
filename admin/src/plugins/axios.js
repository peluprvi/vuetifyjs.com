import Vue from 'vue'
import axios from 'axios'

const {
  VUE_APP_API_HOST,
  VUE_APP_API_PORT
} = process.env

const client = axios.create({
  baseURL: `http://${VUE_APP_API_HOST}:${VUE_APP_API_PORT}/api`
})

Vue.prototype.$http = client

export default client
