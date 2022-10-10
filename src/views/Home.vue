<template>
  <div class="container">
    <div class="home__container row flex-nowrap">
      <HomeTweet class="col-7" />
      <PopularUsers class="col-3" />
    </div>
  </div>
</template>

<script>
import HomeTweet from '../components/HomeTweet.vue'
import PopularUsers from '../components/PopularUsers.vue'

export default {
  name: 'Home',
  components: { HomeTweet, PopularUsers },
  data() {
    return {
      tweets: [],
      isProcessing: false,
      isLoading: false
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets() {
      try {
        this.isLoading = true

        const { data } = await tweetAPI.getAll()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
