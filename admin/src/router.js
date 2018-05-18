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

export default new Router({
  routes: [
    route('/', 'Home'),
    route('/data/index', 'data/Index'),
    route('/data/create', 'data/Create'),
    route('/scaffold/index', 'scaffold/Index'),
    route('/scaffold/create', 'scaffold/Create')
  ]
})
