<template>
  <div class="container">
    <div class="home__container row flex-nowrap">
      <TweetDetail
        :is-loading="isLoading"
        :tweet="tweet"
        :replies="replies"
        @after-delete-reply="afterDeleteReply"
        @after-like-tweet="afterLikeTweet"
        @after-unlike-tweet="afterUnlikeTweet"
      />
    </div>
  </div>
</template>

<script>
import TweetDetail from '../components/TweetDetail.vue'
import tweetsAPI from '../apis/tweets'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'

export default {
  name: 'Home',
  components: { TweetDetail },
  data() {
    return {
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

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweet.id = data.id
        this.tweet.createdAt = data.createdAt
        this.tweet.description = data.description
        this.tweet.likeCount = data.likeCount
        this.tweet.replyCount = data.replyCount
        this.tweet.isLiked = data.isLiked
        this.tweet.user = data.User
      } catch (error) {
        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法取得貼文，請稍後再試'
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
          title: '無法取得回覆，請稍後再試'
        })
      }
    },
    afterDeleteReply(id) {
      this.replies = this.replies.filter((reply) => reply.id !== id)
    },
    afterLikeTweet(id) {
      if (this.tweet.id === id) {
        this.tweet = {
          ...this.tweet,
          isLiked: true
        }
      }
    },
    afterUnlikeTweet(id) {
      if (this.tweet.id === id) {
        this.tweet = {
          ...this.tweet,
          isLiked: false
        }
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
