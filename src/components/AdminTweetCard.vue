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
          class="admin__tweet__container__tweets__image"
          :src="tweet.User.avatar | emptyImage"
          alt=""
        />
        <div class="admin__tweet__container__tweets__description">
          <div class="d-flex justify-content-between">
            <div>
              <span class="admin__tweet__container__tweets__description__name">
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
              class="admin__tweet__container__tweets__description__delete"
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
import Swal from 'sweetalert2'

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

        const result = await Swal.fire({
          icon: 'warning',
          title: '刪除無法復原，確認刪除？',
          showCancelButton: true,
          cancelButtonColor: '#50b5ff',
          cancelButtonText: '取消',
          confirmButtonColor: '#fc5a5a',
          confirmButtonText: '確認'
        })

        if (!result.isConfirmed) {
          this.isProcessing = false
          return
        }

        const { data } = await adminAPI.tweets.delete({ tweetId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId)

        Toast.fire({
          icon: 'success',
          title: '成功刪除回覆'
        })

        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法刪除推文，請稍後再試'
        })
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
