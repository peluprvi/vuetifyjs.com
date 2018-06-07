import Vue from 'vue'
import Router from 'vue-router'

function route (path, name) {
  return {
    path,
    name,
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/views/${name}.vue`
    )
  }
}

Vue.use(Router)

// TODO: Make this dynamic as well
export default new Router({
  routes: [
    route('/data', 'Data'),
    route('/pages', 'Pages'),
    route('/scaffold', 'Scaffold')
  ]
})
