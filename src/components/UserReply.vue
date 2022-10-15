<template>
  <Spinner v-if="isLoading" />
  <div v-else>
    <div
      v-if="repliedTweets.length === 0"
      class="home-tweet__container__tweet-list__blank"
    >
      目前沒有回覆
    </div>
    <div v-else class="user-reply__container d-flex flex-column">
      <div class="user-reply__container__reply-list scrollbar">
        <div
          v-for="repliedTweet in repliedTweets"
          :key="repliedTweet.id"
          class="user-reply__container__reply-list__tweet d-flex"
        >
          <div>
            <img
              :src="repliedTweet.User.avatar | emptyImage"
              class="user-reply__container__reply-list__tweet__avatar"
              alt=""
            />
          </div>
          <div
            class="user-reply__container__reply-list__tweet__text d-flex flex-column"
          >
            <div class="d-flex justify-content-between">
              <div class="reply-list__tweet__title d-flex">
                <div class="reply-list__tweet__title__name none">
                  {{ repliedTweet.User.name }}
                </div>
                <div class="reply-list__tweet__title__account">
                  {{ repliedTweet.User.account | atAccount }}
                </div>
                <span class="reply-list__tweet__title__separator">・</span>
                <div class="reply-list__tweet__title__createdAt">
                  {{ repliedTweet.createdAt | fromNow }}
                </div>
              </div>
              <button
                v-if="currentUser.id === repliedTweet.User.id"
                class="user-tweet__container__tweet-list__tweet__delete"
                :disabled="isProcessing"
                @click.prevent.stop="
                  deleteReply(repliedTweet.Tweet.id, repliedTweet.id)
                "
              >
                ×
              </button>
            </div>
            <div
              class="user-reply__container__reply-list__tweet__text__reply d-flex"
            >
              <span class="reply-list__tweet__reply">回覆</span>
              <router-link
                :to="{
                  name: 'tweets',
                  params: { id: repliedTweet.Tweet.id }
                }"
              >
                <span class="reply-list__tweet__reply-to">{{
                  repliedTweet.Tweet.User.account | atAccount
                }}</span>
              </router-link>
            </div>

            <div
              class="user-reply__container__reply-list__tweet__text__description"
            >
              {{ repliedTweet.comment }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import tweetsAPI from '../apis/tweets'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'
import {
  emptyImageFilter,
  fromNowFilter,
  atAccountFilter
} from '../utils/mixins'
import Spinner from '../components/Spinner.vue'
import Swal from 'sweetalert2'

export default {
  name: 'UserReply',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  components: { Spinner },
  data() {
    return {
      isProcessing: false,
      isLoading: true,
      repliedTweets: []
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRepliedTweets(id)
  },
  methods: {
    async fetchRepliedTweets(id) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.get.replied({ id })
        this.repliedTweets = data
        this.isLoading = false
      } catch (error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得回覆資料'
        })
      }
    },
    async deleteReply(tweet_id, id) {
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

        const { data } = await tweetsAPI.deleteReply({ tweet_id, id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.repliedTweets = this.repliedTweets.filter(
          (reply) => reply.id !== id
        )

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
          title: '無法刪除回覆，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser', 'renderUserAction'])
  },
  watch: {
    renderUserAction: {
      handler: function () {
        const { id } = this.$route.params

        this.fetchRepliedTweets(id)
      },
      deep: true
    },
    $route: {
      handler: function () {
        const { id } = this.$route.params

        this.fetchRepliedTweets(id)
      },
      deep: true
    }
  }
}
</script>
