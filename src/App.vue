<template>
  <div id="app" class="container">
    <div class="app__container row flex-nowrap">
      <Sidebar
        v-if="isAuthenticated && $route.name !== 'not-found'"
        class="col-2"
      />
      <router-view v-if="currentUser.role === 'admin'" class="col-10" />
      <router-view v-if="!isAuthenticated" />
      <router-view v-if="currentUser.role === 'user'" class="col-7" />
      <PopularUsers
        v-if="
          currentUser.role === 'user' &&
          $route.name !== 'not-found' &&
          $route.name !== 'settings'
        "
        class="col-3"
      />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import PopularUsers from './components/PopularUsers.vue'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Sidebar,
    PopularUsers
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  }
}
</script>
