import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 有登入根目錄是 home
    // 未登入 redirect: user-signin
    path: '/',
    name: 'root',
    redirect: '/users/signin'
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
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminTweetList')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
