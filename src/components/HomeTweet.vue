<template>
  <div class="home-tweet__container">
    <h4 class="home-tweet__container__title">首頁</h4>
    <form
      class="home-tweet__container__tweet-box d-flex justify-content-between"
      @submit.stop.prevent="handleSubmit"
    >
      <img
        :src="currentUser.avatar | emptyImage"
        class="home-tweet__container__tweet-box__img"
        alt=""
      />
      <textarea
        v-model="description"
        class="home-tweet__container__tweet-box__input scrollbar"
        type="text"
        name="post-tweet"
        placeholder="有什麼新鮮事？"
      />
      <div
        class="home-tweet__container__tweet-box__span d-flex flex-column align-items-end justify-content-end"
      >
        <span class="home-tweet__container__tweet-box__input__length"
          >{{ description.length }}/140</span
        >
        <button
          class="home-tweet__container__tweet-box__btn"
          :disabled="isProcessing"
        >
          推文
        </button>
      </div>
    </form>

    <div class="home-tweet__container__tweet-list scrollbar">
      <Spinner v-if="isLoading" />
      <HomeDetail
        v-else
        v-for="tweet in tweets"
        :key="tweet.id"
        :initial-tweet="tweet"
        @after-delete-tweet="afterDeleteTweet"
      />
    </div>
  </div>
</template>

<script>
import tweetsAPI from '../apis/tweets'
import HomeDetail from './HomeDetail.vue'
import { emptyImageFilter } from '../utils/mixins'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'HomeTweet',
  mixins: [emptyImageFilter],
  components: { HomeDetail, Spinner },
  data() {
    return {
      tweets: [],
      description: '',
      isLoading: false,
      isProcessing: false
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets() {
      try {
        this.isLoading = true

        const { data } = await tweetsAPI.getAll()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法取得推文資料，請稍後再試'
        })
      }
    },
    async handleSubmit() {
      try {
        this.isProcessing = true
        this.description = this.description.trim()

        if (!this.description) {
          Toast.fire({
            icon: 'warning',
            title: '推文內容不可空白'
          })

          this.isProcessing = false
          return
        }

        if (this.description.length > 140) {
          Toast.fire({
            icon: 'warning',
            title: '推文字數不可超過 140 字'
          })

          this.isProcessing = false
          return
        }

        const { data } = await tweetsAPI.create({
          description: this.description
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.description = ''

        Toast.fire({
          icon: 'success',
          title: '成功建立推文'
        })

        this.fetchTweets()
        this.$store.commit('triggerRender')
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法新增推文，請稍後再試'
        })
      }
    },
    afterDeleteTweet(id) {
      this.tweets = this.tweets.filter((tweet) => tweet.id !== id)
    }
  },
  computed: {
    ...mapState(['currentUser', 'renderTweet'])
  },
  watch: {
    renderTweet: {
      handler: function () {
        this.fetchTweets()
      },
      deep: true
    }
  }
}
</script>
