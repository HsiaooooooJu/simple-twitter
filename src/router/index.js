import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 有登入根目錄是 home
    // 未登入 redirect: user-signin
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users/signin',
    name: 'user-signin',
    component: () => import('.././views/UserSignIn')
  },
  {
    path: '/admin/signin',
    name: 'admin-signin',
    component: () => import('../views/AdminSignIn')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
})

export default router
