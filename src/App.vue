<template>
  <div id="app" class="container">
    <div class="app__container row flex-nowrap">
      <Sidebar
        v-if="isAuthenticated && $route.name !== 'not-found'"
        class="col-2"
      />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Sidebar
  },
  computed: {
    ...mapState(['isAuthenticated'])
  }
}
</script>
