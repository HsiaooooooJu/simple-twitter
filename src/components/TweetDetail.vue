<template>
  <Spinner v-if="isLoading" />
  <div v-else class="home-tweet__container d-flex flex-column">
    <div class="home-tweet__container__title d-flex">
      <img
        src="../assets/images/back.svg"
        alt=""
        class="home-tweet__container__title__img cursor-pointer"
        @click="$router.push('/home')"
      />
      <h4>推文</h4>
    </div>
    <div class="scrollbar">
      <div class="home-tweet__container__tweet d-flex flex-column">
        <div class="home-tweet__container__tweet__title d-flex">
          <router-link :to="{ name: 'profile', params: { id: tweet.user.id } }"
            ><img
              :src="tweet.user.avatar | emptyImage"
              alt=""
              class="home-tweet__container__tweet__title__img"
            />
          </router-link>
          <div class="home-tweet__container__tweet__title__box">
            <router-link
              :to="{ name: 'profile', params: { id: tweet.user.id } }"
              class="home-tweet__container__tweet__title__box__name none"
            >
              {{ tweet.user.name }}
            </router-link>
            <div class="home-tweet__container__tweet__title__box__account">
              {{ tweet.user.account | atAccount }}
            </div>
          </div>
        </div>
        <div class="home-tweet__container__tweet__description">
          {{ tweet.description }}
        </div>
        <div class="home-tweet__container__tweet__createdAt">
          {{ tweet.createdAt | time }}・{{ tweet.createdAt | date }}
        </div>
      </div>
      <div class="home-tweet__container__tweet__num d-flex">
        <div class="home-tweet__container__tweet__num__box">
          <span
            class="home-tweet__container__tweet__num__box__count num-font"
            >{{ tweet.replyCount }}</span
          >
          <span class="home-tweet__container__tweet__num__box__unit">回覆</span>
        </div>
        <div class="home-tweet__container__tweet__num__box">
          <span
            class="home-tweet__container__tweet__num__box__count num-font"
            >{{ tweet.likeCount }}</span
          >
          <span class="home-tweet__container__tweet__num__box__unit"
            >喜歡次數</span
          >
        </div>
      </div>
      <div class="home-tweet__container__tweet d-flex">
        <button class="home-tweet__container__tweet__icon">
          <img
            src="../assets/images/reply.svg"
            alt=""
            @click="fetchTweet(tweet.id)"
          />
        </button>
        <button
          v-if="!tweet.isLiked"
          class="home-tweet__container__tweet__icon"
          :disabled="isProcessing"
          @click.prevent.stop="like(tweet.id)"
        >
          <img src="../assets/images/unlike.svg" alt="" />
        </button>
        <button
          v-else
          class="home-tweet__container__tweet__icon"
          :disabled="isProcessing"
          @click.prevent.stop="unlike(tweet.id)"
        >
          <img src="../assets/images/like.svg" alt="" />
        </button>
      </div>
      <div class="home-tweet__container__reply-list">
        <div
          v-if="!replies.length"
          class="home-tweet__container__tweet-list__blank"
        >
          目前沒有回覆
        </div>
        <div
          v-else
          v-for="reply in replies"
          :key="reply.id"
          class="home-tweet__container__tweet-list__tweet d-flex"
        >
          <router-link :to="{ name: 'profile', params: { id: reply.User.id } }">
            <img
              :src="reply.User.avatar | emptyImage"
              class="home-tweet__container__tweet-list__tweet__avatar"
              alt=""
            />
          </router-link>
          <div
            class="home-tweet__container__tweet-list__tweet__text d-flex flex-column"
          >
            <div class="d-flex justify-content-between">
              <div class="tweet-list__tweet__title d-flex">
                <router-link
                  :to="{ name: 'profile', params: { id: reply.User.id } }"
                  class="tweet-list__tweet__title__name none"
                >
                  {{ reply.User.name }}
                </router-link>
                <div class="tweet-list__tweet__title__account">
                  {{ reply.User.account | atAccount }}
                </div>
                <span class="tweet-list__tweet__title__separator">・</span>
                <div class="tweet-list__tweet__title__createdAt">
                  {{ reply.createdAt | fromNow }}
                </div>
              </div>
              <button
                v-show="currentUser.id === reply.User.id"
                class="home-tweet__container__tweet-list__tweet__delete__reply"
                :disabled="isProcessing"
                @click="deleteReply(tweet.id, reply.id)"
              >
                ×
              </button>
            </div>
            <div
              class="home-tweet__container__tweet-list__tweet__text__reply d-flex"
            >
              <span class="tweet-list__tweet__reply">回覆</span>
              <router-link
                :to="{ name: 'profile', params: { id: reply.Tweet.User.id } }"
              >
                <span class="tweet-list__tweet__reply-to">{{
                  reply.Tweet.User.account | atAccount
                }}</span>
              </router-link>
            </div>
            <div
              class="home-tweet__container__tweet-list__tweet__text__reply__description"
            >
              {{ reply.comment }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Spinner v-if="modalIsLoading" />
    <ReplyModal
      v-else
      v-show="showModal"
      :reply-tweet="replyTweet"
      @close-modal="showModal = false"
    />
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import tweetsAPI from '../apis/tweets'
import { mapState } from 'vuex'
import Spinner from '../components/Spinner.vue'
import ReplyModal from '../components/ReplyModal.vue'
import {
  emptyImageFilter,
  fromNowFilter,
  atAccountFilter
} from '../utils/mixins'
import { Toast } from '../utils/helpers'
import Swal from 'sweetalert2'

export default {
  name: 'TweetDetail',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  components: { ReplyModal, Spinner },
  props: {
    tweet: {
      type: Object,
      required: true
    },
    replies: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isLiked: this.tweet.isLiked,
      isProcessing: false,
      modalIsLoading: false,
      showModal: false,
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
      }
    }
  },
  methods: {
    async fetchTweet(id) {
      try {
        this.modalIsLoading = true
        this.showModal = true

        const { data } = await tweetsAPI.getTweet({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.replyTweet = data
        this.modalIsLoading = false
      } catch (error) {
        this.modalIsLoading = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法取得推文資料，請稍後再試'
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

        this.$emit('after-like-tweet', id)

        Toast.fire({
          icon: 'success',
          title: '按讚成功！你真是個好人～'
        })

        this.$parent.fetchTweet(id)
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false

        console.log(error)

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

        this.$emit('after-unlike-tweet', id)

        Toast.fire({
          icon: 'success',
          title: '不要取消嘛～～～'
        })

        this.$parent.fetchTweet(id)
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

        Toast.fire({
          icon: 'success',
          title: '成功刪除回覆'
        })

        this.$emit('after-delete-reply', id)
        this.$parent.fetchTweet(tweet_id)
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
    ...mapState(['currentUser'])
  }
}
</script>
