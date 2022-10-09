<template>
  <div class="container">
    <div class="admin__container row flex-nowrap">
      <AdminTweetCard class="col-10" />
    </div>
  </div>
</template>

<script>
import AdminTweetCard from '../components/AdminTweetCard.vue'

export default {
  name: 'AdminTweetList',
  components: {
    AdminTweetCard
  }
}
</script>
