<template>
  <div class="container">
    <div class="admin__container row">
      <Sidebar class="col-3" />
      <AdminUserCard class="col-9" />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import AdminUserCard from '../components/AdminUserCard.vue'

export default {
  name: 'AdminTweetList',
  components: {
    AdminUserCard,
    Sidebar
  }
}
</script>
