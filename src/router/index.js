import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import store from '../store'

Vue.use(VueRouter)

// 驗證是管理員才可以去後台
const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== 'admin') {
    next('/not-found')
    return
  }
  next()
}

// 驗證是使用者才可以去前台
const authorizeIsUser = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== 'user') {
    next('/not-found')
    return
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/users/signin'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: authorizeIsUser
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings'),
    beforeEnter: authorizeIsUser
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
    name: 'user-signup',
    component: () => import('../views/UserSignUp')
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminTweetList'),
    beforeEnter: authorizeIsAdmin
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

router.beforeEach((to, from, next) => {
  // 使用 dispatch 呼叫 Vuex 內的 actions
  store.dispatch('fetchCurrentUser')
  next()
})

router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated
  const pathsWithoutAuthentication = [
    'user-signin',
    'admin-signin',
    'user-signup'
  ]

  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/users/signin')
    return
  }

  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    const role = store.state.currentUser.role
    if (role === 'user') {
      next('/home')
      return
    } else if (role === 'admin') {
      next('/admin/tweets')
      return
    }
  }

  next()
})

export default router
