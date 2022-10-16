<template>
  <div class="user__action__container">
    <div class="nav-tab__container d-flex">
      <div v-for="tab in tabs" :key="tab.id" class="nav-tab__container__tab">
        <button
          class="nav-tab__container__tab__btn"
          :class="{ active: tab.id === currentTab }"
          @click="toggleTab(tab.id)"
        >
          {{ tab.title }}
        </button>
      </div>
    </div>
    <div>
      <UserTweet v-if="currentTab === 1" />
      <UserReply v-if="currentTab === 2" />
      <UserLike v-if="currentTab === 3" />
    </div>
  </div>
</template>

<script>
import UserLike from '../components/UserLike.vue'
import UserReply from '../components/UserReply.vue'
import UserTweet from '../components/UserTweet.vue'

export default {
  name: 'UserAction',
  components: { UserTweet, UserLike, UserReply },
  data() {
    return {
      tabs: [
        {
          id: 1,
          title: '推文'
        },
        {
          id: 2,
          title: '回覆'
        },
        {
          id: 3,
          title: '喜歡的內容'
        }
      ],
      currentTab: 1
    }
  },
  methods: {
    toggleTab(tabId) {
      this.currentTab = tabId
    }
  }
}
</script>
