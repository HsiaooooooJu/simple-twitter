<template>
  <div class="container">
    <div class="follow__container row flex-nowrap">
      <UserFollow class="col-7" />
      <PopularUsers class="col-3" />
    </div>
  </div>
</template>

<script>
import UserFollow from '../components/UserFollow.vue'
import PopularUsers from '../components/PopularUsers.vue'

export default {
  name: 'Follow',
  components: { UserFollow, PopularUsers }
}
</script>
