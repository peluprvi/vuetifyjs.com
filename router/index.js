import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'
import paths from './paths'
import scrollBehavior from './scroll-behavior'

Vue.use(Router)

// language regex:
// /^[a-z]{2,3}(?:-[a-zA-Z]{4})?(?:-[A-Z]{2,3})?$/
// /^[a-z]{2,3}|[a-z]{2,3}-[a-zA-Z]{4}|[a-z]{2,3}-[A-Z]{2,3}$/

// The meta data for your routes
const meta = require('./meta.json')
const release = process.env.RELEASE

// Function to create routes
// Is default lazy but can be changed
function route (path, view, fullscreen, props) {
  return {
    path: path,
    meta: Object.assign({ fullscreen }, meta[path]),
    name: view,
    props,
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/pages/${view}Page.vue`
    )
  }
}

const routes = paths.map(path => {
  return route(...path)
})

export function createRouter (store) {
  const router = new Router({
    base: release ? `/releases/${release}` : __dirname,
    mode: release ? 'hash' : 'history',
    scrollBehavior,
    routes: [
      {
        path: '/:lang([a-z]{2,3}|[a-z]{2,3}-[a-zA-Z]{4}|[a-z]{2,3}-[A-Z]{2,3})',
        component: () => import(/* webpackChunkName: "routes" */'@/components/views/RootView.vue'),
        props: route => ({ lang: route.params.lang }),
        children: routes
      },
      {
        path: '*',
        // TODO: use current language (localstorage?)
        redirect: to => `/en${to.path}`
      }
    ]
  })

  router.beforeEach((to, from, next) => {
    if (to.meta.fullscreen || from.meta.fullscreen) {
      store.commit('app/FULLSCREEN', !!to.meta.fullscreen)
    }
    next()
  })

  Vue.use(VueAnalytics, {
    id: 'UA-75262397-3',
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    },
    debug: process.env.DEBUG ? {
      enabled: true,
      trace: false,
      sendHitTask: true
    } : false
  })

  return router
}
