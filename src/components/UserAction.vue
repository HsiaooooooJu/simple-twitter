<template>
  <div class="container">
    <UserLike />
    <UserReply />
    <UserTweet />
  </div>
</template>

<script>
import UserLike from '../components/UserLike.vue'
import UserReply from '../components/UserReply.vue'
import UserTweet from '../components/UserTweet.vue'

export default {
  name: 'UserAction',
  components: { UserLike, UserTweet, UserReply }
}
</script>
