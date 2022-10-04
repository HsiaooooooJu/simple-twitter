import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: () => import('.././views/SignIn')
  }
]

const router = new VueRouter({
  routes
})

export default router
