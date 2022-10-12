<template>
  <div class="user__action__container">
    <!-- <UserTweet /> -->
    <UserReply />
    <UserLike />
  </div>
</template>

<script>
import UserLike from '../components/UserLike.vue'
import UserReply from '../components/UserReply.vue'
// import UserTweet from '../components/UserTweet.vue'

export default {
  name: 'UserAction',
  components: { UserLike, UserReply },
  data() {
    return {}
  },
  created() {
    // console.log(this.currentTab)
  }
}
</script>
<!-- UserTweet -->