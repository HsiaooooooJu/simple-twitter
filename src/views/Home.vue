<template>
  <div class="container">
    <Spinner v-if="isLoading" />
    <div v-else class="home__container row flex-nowrap">
      <HomeTweet :initial-tweets="tweets" class="col-7" />
      <PopularUsers class="col-3" />
    </div>
  </div>
</template>

<script>
// import Sidebar from '../components/Sidebar.vue'
import HomeTweet from '../components/HomeTweet.vue'
import PopularUsers from '../components/PopularUsers.vue'
import Spinner from '../components/Spinner.vue'
import tweetAPI from '../apis/tweets'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: { HomeTweet, PopularUsers, Spinner },
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
