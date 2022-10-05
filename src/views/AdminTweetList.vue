<template>
  <div class="container">
    <div class="admin__container row">
      <Sidebar class="col-3" />
      <AdminTweetCard class="col-9" />
    </div>
  </div>
</template>

<script>
import AdminTweetCard from '../components/AdminTweetCard.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  components: {
    AdminTweetCard,
    Sidebar
  }
}
</script>
