<template>
  <div class="admin__tweet__container">
    <div class="admin__tweet__container__title">推文清單</div>
    <spinner v-if="isLoading" />
    <div v-else class="scrollbar">
      <div
        v-for="tweet in tweets"
        :key="tweet.id"
        class="admin__tweet__container__tweets d-flex"
      >
        <img
          class="admin__tweet__container__tweets__image cursor-pointer"
          :src="tweet.User.avatar | emptyImage"
          alt=""
        />
        <div class="admin__tweet__container__tweets__description">
          <div class="d-flex justify-content-between">
            <div>
              <span
                class="admin__tweet__container__tweets__description__name cursor-pointer"
              >
                {{ tweet.User.name }}
              </span>
              <span
                class="admin__tweet__container__tweets__description__account"
              >
                {{ tweet.User.account | atAccount }}
              </span>
              <span class="admin__tweet__container__tweets__description__dot"
                >・</span
              >
              <span
                class="admin__tweet__container__tweets__description__createdAt"
              >
                {{ tweet.createdAt | fromNow }}
              </span>
            </div>
            <button
              class="admin__tweet__container__tweets__description__delete cursor-pointer"
              :disabled="isProcessing"
              @click.stop.prevent="deleteTweet(tweet.id)"
            >
              ×
            </button>
          </div>
          <div class="admin__tweet__container__tweets__description__content">
            {{ tweet.description | setEllipsis }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'
import {
  emptyImageFilter,
  fromNowFilter,
  atAccountFilter
} from '../utils/mixins'

export default {
  name: 'AdminTweetCard',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  components: {
    Spinner
  },
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

        const { data } = await adminAPI.tweets.get()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.error
      }
    },
    async deleteTweet(tweetId) {
      try {
        this.isProcessing = true

        const { data } = await adminAPI.tweets.delete({ tweetId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId)

        Toast.fire({
          icon: 'success',
          title: '刪除成功 !'
        })

        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false

        console.log(error)
      }
    }
  },
  filters: {
    setEllipsis(value) {
      const len = 50
      if (value.length > len) {
        return value.slice(0, len) + '...'
      }
      return value
    }
  }
}
</script>
