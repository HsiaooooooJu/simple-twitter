<template>
  <div class="container">
    <Spinner v-if="isLoading" />
    <div v-else class="home__container row flex-nowrap">
      <!-- <Sidebar class="col-2" /> -->
      <HomeTweet :initial-tweets="tweets" class="col-8" />
      <!-- component: PopularUsers -->
      <div class="col-2" />
    </div>
  </div>
</template>

<script>
// import Sidebar from '../components/Sidebar.vue'
import HomeTweet from '../components/HomeTweet.vue'
import Spinner from '../components/Spinner.vue'
import tweetAPI from '../apis/tweets'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: { HomeTweet, Spinner },
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
        console.error
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
