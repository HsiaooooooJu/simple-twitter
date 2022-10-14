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
      <div
        v-else
        v-for="tweet in tweets"
        :key="tweet.id"
        class="home-tweet__container__tweet-list__tweet d-flex"
      >
        <router-link :to="{ name: 'profile', params: { id: tweet.User.id } }">
          <img
            :src="tweet.User.avatar | emptyImage"
            class="home-tweet__container__tweet-list__tweet__avatar"
            alt=""
        /></router-link>
        <div
          class="home-tweet__container__tweet-list__tweet__text d-flex flex-column"
        >
          <div class="d-flex justify-content-between">
            <div class="tweet-list__tweet__title d-flex">
              <div class="tweet-list__tweet__title__name">
                <router-link
                  :to="{ name: 'profile', params: { id: tweet.User.id } }"
                  >{{ tweet.User.name }}</router-link
                >
              </div>
              <div class="tweet-list__tweet__title__account">
                {{ tweet.User.account | atAccount }}
              </div>
              <span class="tweet-list__tweet__title__separator">・</span>
              <div class="tweet-list__tweet__title__createdAt">
                {{ tweet.createdAt | fromNow }}
              </div>
            </div>

            <button
              v-show="currentUser.id === tweet.User.id"
              class="home-tweet__container__tweet-list__tweet__delete"
              :disabled="isProcessing"
              @click="deleteTweet(tweet.id)"
            >
              ×
            </button>
          </div>
          <div
            class="home-tweet__container__tweet-list__tweet__text__description cursor-pointer"
            @click="checkTweetReplies(tweet.id)"
          >
            {{ tweet.description }}
          </div>
          <div class="tweet-list__tweet__action d-flex">
            <div class="tweet-list__tweet__action__reply d-flex">
              <img
                src="../assets/images/reply.svg"
                class="tweet-list__tweet__action__reply__icon cursor-pointer"
                alt=""
                @click="fetchTweet(tweet.id)"
              />
              <div class="tweet-list__tweet__action__reply__count num-font">
                {{ tweet.replyCount }}
              </div>
            </div>
            <div class="tweet-list__tweet__action__like d-flex">
              <button
                v-if="!tweet.isLiked"
                :disabled="isProcessing"
                @click.prevent.stop="like(tweet.id)"
              >
                <img
                  src="../assets/images/unlike.svg"
                  alt=""
                  class="tweet-list__tweet__action__like__icon cursor-pointer"
                />
              </button>
              <button
                v-else
                :disabled="isProcessing"
                @click.prevent.stop="unlike(tweet.id)"
              >
                <img
                  src="../assets/images/like.svg"
                  alt=""
                  class="tweet-list__tweet__action__like__icon cursor-pointer"
                />
              </button>

              <div class="tweet-list__tweet__action__like__count num-font">
                {{ tweet.likeCount }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Spinner v-if="isLoading" />
    <ReplyModal
      v-else
      v-show="showModal"
      :reply-tweet="replyTweet"
      @close-modal="showModal = false"
    />
  </div>
</template>

<script>
import tweetsAPI from '../apis/tweets'
import usersAPI from '../apis/users'
import {
  emptyImageFilter,
  fromNowFilter,
  atAccountFilter
} from '../utils/mixins'
import { Toast } from '../utils/helpers'
import ReplyModal from '../components/ReplyModal.vue'
import { mapState } from 'vuex'
import Spinner from '../components/Spinner.vue'
import Swal from 'sweetalert2'

export default {
  name: 'HomeTweet',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  components: { ReplyModal, Spinner },
  data() {
    return {
      tweets: [],
      replyTweet: {
        id: 0,
        description: '',
        createdAt: '',
        replyCount: 0,
        likeCount: 0,
        isLiked: 0,
        User: {
          id: 0,
          name: '',
          account: '',
          avatar: ''
        }
      },
      showModal: false,
      isLoading: false,
      description: '',
      isProcessing: false
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    checkTweetReplies(id) {
      this.$router.push({
        name: 'tweets',
        params: { id }
      })
    },
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
    async fetchTweet(id) {
      try {
        this.isLoading = true
        this.showModal = true

        const { data } = await tweetsAPI.getTweet({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.replyTweet = data
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
    async like(id) {
      try {
        this.isProcessing = true

        const { data } = await usersAPI.like({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id !== id) {
            return tweet
          } else {
            return {
              ...tweet,
              isLiked: true,
              likeCount: tweet.likeCount + 1
            }
          }
        })

        Toast.fire({
          icon: 'success',
          title: '按讚成功！你真是個好人～'
        })

        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法按讚，請稍後再試'
        })
      }
    },
    async unlike(id) {
      try {
        this.isProcessing = true

        const { data } = await usersAPI.unlike({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id !== id) {
            return tweet
          } else {
            return {
              ...tweet,
              isLiked: false,
              likeCount: tweet.likeCount - 1
            }
          }
        })

        Toast.fire({
          icon: 'success',
          title: '不要取消嘛～～～'
        })

        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法取消喜歡，請稍後再試'
        })
      }
    },
    async deleteTweet(id) {
      try {
        this.isProcessing = true

        const result = await Swal.fire({
          icon: 'warning',
          title: '刪除無法復原，確認刪除？',
          showCancelButton: true,
          cancelButtonColor: '#fc5a5a',
          cancelButtonText: '取消',
          confirmButtonColor: '#50b5ff',
          confirmButtonText: '確認'
        })

        if (result.isConfirmed) {
          Toast.fire({
            icon: 'success',
            title: '成功刪除推文'
          })
        } else {
          this.isProcessing = false
          return false
        }

        const { data } = await tweetsAPI.delete({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweets = this.tweets.filter((tweet) => tweet.id !== id)

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
  computed: {
    ...mapState(['currentUser', 'renderTweet'])
  }
}
</script>
