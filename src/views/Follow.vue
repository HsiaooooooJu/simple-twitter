<template>
  <div class="container">
    <div class="follow__container row flex-nowrap">
      <UserFollow />
    </div>
  </div>
</template>

<script>
import UserFollow from '../components/UserFollow.vue'

export default {
  name: 'Follow',
  components: { UserFollow }
}
</script>
