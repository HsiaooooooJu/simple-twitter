<template>
  <div class="container">
    <div class="home__container row flex-nowrap">
      <HomeTweet />
    </div>
  </div>
</template>

<script>
import HomeTweet from '../components/HomeTweet.vue'

export default {
  name: 'Home',
  components: { HomeTweet }
}
</script>
