<template>
  <div class="user__action__container">
    <div class="nav-tab__container d-flex">
      <div class="nav-tab__container__tab">
        <button
          class="nav-tab__container__tab__btn"
          @click="toggleTab('tweet')"
        >
          推文
        </button>
        <button
          class="nav-tab__container__tab__btn"
          @click="toggleTab('reply')"
        >
          回覆
        </button>
        <button class="nav-tab__container__tab__btn" @click="toggleTab('like')">
          喜歡的內容
        </button>
      </div>
    </div>
    <div>
      <UserTweet v-if="this.tabType === 1" />
      <UserReply v-if="this.tabType === 2" />
      <UserLike v-if="this.tabType === 3" />
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
      tabType: 1
    }
  },
  methods: {
    toggleTab(tab) {
      if (tab !== 'reply' && tab !== 'like') {
        this.tabType = 1
      } else if (tab === 'reply') {
        this.tabType = 2
      } else if (tab === 'like') {
        this.tabType = 3
      }
    }
  }
}
</script>
