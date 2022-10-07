<template>
  <div class="container">
    <div class="home__container row">
      <Sidebar class="col-3" />
      <HomeTweet class="col-6" />
      <!-- component: PopularUsers -->
      <div class="col-3" />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import HomeTweet from '../components/HomeTweet.vue'
export default {
  components: { Sidebar, HomeTweet },
  name: 'Home'
}
</script>
