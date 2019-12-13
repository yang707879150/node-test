import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'
import iView from 'iview'

Vue.use(iView)
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('views/login.vue')
    },
    {
      path: '*',
      name: 'Home',
      component: () => import('views/Home.vue')
    },
  ]
})
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
