<template>
  <div class="container">
    <Spinner v-if="isLoading" />
    <div v-else class="home__container row flex-nowrap">
      <TweetDetail
        :initial-tweet="tweet"
        :initial-replies="replies"
        class="col-7"
      />
      <PopularUsers class="col-3" />
    </div>
  </div>
</template>

<script>
import PopularUsers from '../components/PopularUsers.vue'
import Spinner from '../components/Spinner.vue'
import TweetDetail from '../components/TweetDetail.vue'
import tweetsAPI from '../apis/tweets'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'

export default {
  name: 'Home',
  components: { PopularUsers, Spinner, TweetDetail },
  data() {
    return {
      tweets: [],
      tweet: {
        id: 0,
        description: '',
        createdAt: '',
        replyCount: 0,
        likeCount: 0,
        isLiked: 0,
        user: {}
      },
      replies: [],
      isProcessing: false,
      isLoading: false
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchTweet(id)
    this.fetchTweetReplies(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = this.$route.params
    this.fetchTweet(id)
    this.fetchTweetReplies(id)
    next()
  },
  methods: {
    async fetchTweet(id) {
      try {
        const { data } = await tweetsAPI.getTweet({ id })

        this.tweet.id = data.id
        this.tweet.createdAt = data.createdAt
        this.tweet.description = data.description
        this.tweet.likeCount = data.likeCount
        this.tweet.replyCount = data.replyCount
        this.tweet.isLiked = data.isLiked

        this.tweet.user = data.User
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得貼文'
        })
      }
    },
    async fetchTweetReplies(tweet_id) {
      try {
        this.isLoading = true

        const { data } = await tweetsAPI.getReplies({ tweet_id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.replies = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得回覆'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
