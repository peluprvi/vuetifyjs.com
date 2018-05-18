import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'

const {
  VUE_APP_API_HOST,
  VUE_APP_API_PORT
} = process.env

const client = axios.create({
  baseURL: `http://${VUE_APP_API_HOST}:${VUE_APP_API_PORT}/api`
})

Vue.config.productionTip = false
Vue.prototype.$http = client

const requireComponent = require.context(
  './components', true, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
