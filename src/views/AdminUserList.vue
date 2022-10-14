<template>
  <div class="container">
    <div class="admin__container row flex-nowrap">
      <AdminUserCard />
    </div>
  </div>
</template>

<script>
import AdminUserCard from '../components/AdminUserCard.vue'

export default {
  name: 'AdminTweetList',
  components: {
    AdminUserCard
  }
}
</script>
