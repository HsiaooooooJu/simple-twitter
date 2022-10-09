<template>
  <div class="container">
    <div class="admin__container row flex-nowrap">
      <AdminUserCard class="col-10" />
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
