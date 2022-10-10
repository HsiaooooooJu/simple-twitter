<template>
  <div class="container">
    <div class="home__container row flex-nowrap">
      <HomeTweet class="col-7" />
      <PopularUsers class="col-3" />
    </div>
  </div>
</template>

<script>
import HomeTweet from '../components/HomeTweet.vue'
import PopularUsers from '../components/PopularUsers.vue'
export default {
  name: 'Home',
  components: { HomeTweet, PopularUsers }
}
</script>
