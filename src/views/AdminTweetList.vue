<template>
  <div class="container">
    <div class="admin__container row">
      <Sidebar class="col-2" />
      <AdminTweetCard class="col-10" />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import AdminTweetCard from '../components/AdminTweetCard.vue'

export default {
  name: 'AdminTweetList',
  components: {
    AdminTweetCard,
    Sidebar
  }
}
</script>
