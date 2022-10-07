import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/users/signin'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings')
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
    path: '/users/signup',
    name: 'users-signup',
    component: () => import('../views/UserSignUp')
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminTweetList')
  },
  {
    path: '/admin/users',
    name: 'admin-uses',
    component: () => import('../views/AdminUserList')
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
