<template>
  <div class="admin__tweet__container">
    <div class="admin__tweet__container__title">推文清單</div>
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
            <span class="admin__tweet__container__tweets__description__account">
              {{ tweet.User.account | setAccount }}
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
          <div
            class="admin__tweet__container__tweets__description__delete cursor-pointer"
            @click.stop.prevent="deleteTweet(tweet.id)"
          >
            ×
          </div>
        </div>
        <div class="admin__tweet__container__tweets__description__content">
          {{ tweet.description | setEllipsis }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from '../apis/admin'
import { emptyImageFilter, fromNowFilter } from '../utils/mixins'

export default {
  name: 'AdminTweetCard',
  mixins: [emptyImageFilter, fromNowFilter],
  data() {
    return {
      tweets: []
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets() {
      try {
        const { data } = await adminAPI.tweets.get()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = data
      } catch (error) {
        console.error
      }
    },
    async deleteTweet(tweetId) {
      try {
        const { data } = await adminAPI.tweets.delete({ tweetId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId)
      } catch (error) {
        console.log(error)
      }
    }
  },
  filters: {
    setAccount(value) {
      return '@' + value
    },
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
