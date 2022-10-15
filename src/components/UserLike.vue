<template>
  <Spinner v-if="isLoading" />
  <div v-else class="user-like__container scrollbar">
    <div
      v-if="this.likeTweets.length === 0"
      class="user-like__container__no__content text-center"
    >
      尚無喜歡的推文
    </div>
    <div
      v-else
      v-for="likeTweet in likeTweets"
      :key="likeTweet.id"
      class="user-like__container__tweet d-flex"
    >
      <router-link :to="{ name: 'profile', params: { id: likeTweet.userId } }">
        <img
          class="user-like__container__img"
          :src="likeTweet.avatar | emptyImage"
          alt=""
        />
      </router-link>
      <div class="user-like__container__text">
        <div
          class="user-like__container__content d-flex justify-content-between"
        >
          <div>
            <router-link
              :to="{ name: 'profile', params: { id: likeTweet.userId } }"
              class="user-like__container__name none"
              >{{ likeTweet.name }}</router-link
            >
            <span class="user-like__container__account">
              {{ likeTweet.account | atAccount }}
            </span>
            <span class="user-like__container__dot">‧</span>
            <span class="user-like__container__createdAt">
              {{ likeTweet.createdAt | fromNow }}
            </span>
          </div>
          <button
            v-show="currentUser.id === likeTweet.userId"
            class="user-like__container__delete"
            :disabled="isProcessing"
            @click="deleteTweet(likeTweet.tweetId)"
          >
            ×
          </button>
        </div>
        <div
          class="user-like__container__description cursor-pointer"
          @click="leadToTweetDetail(likeTweet.tweetId)"
        >
          {{ likeTweet.description }}
        </div>
        <div class="user-like__container__action d-flex">
          <div class="user-like__container__action__reply">
            <button @click="fetchTweet(likeTweet.tweetId)">
              <img
                class="user-like__container__action__reply__button"
                src="../assets/images/reply.svg"
                alt=""
              /></button
            ><span
              class="user-like__container__action__reply__count num-font"
              >{{ likeTweet.replyCount }}</span
            >
          </div>
          <div class="user-like__container__action__like">
            <button
              v-if="!likeTweet.isLiked"
              :disabled="isProcessing"
              @click.stop.prevent="addLike(likeTweet.tweetId)"
            >
              <img
                class="user-like__container__action__unlike__button"
                src="../assets/images/unlike.svg"
                alt=""
              />
            </button>
            <button
              v-else
              :disabled="isProcessing"
              @click.stop.prevent="deleteLike(likeTweet.tweetId)"
            >
              <img
                class="user-like__container__action__like__button"
                src="../assets/images/like.svg"
                alt=""
              />
            </button>
            <span class="user-like__container__action__like__count num-font">{{
              likeTweet.likeCount
            }}</span>
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
import usersAPI from '../apis/users'
import tweetsAPI from '../apis/tweets'
import Spinner from './Spinner.vue'
import ReplyModal from './ReplyModal.vue'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'
import {
  emptyImageFilter,
  atAccountFilter,
  fromNowFilter
} from '../utils/mixins'
import Swal from 'sweetalert2'

export default {
  name: 'UserLike',
  mixins: [emptyImageFilter, atAccountFilter, fromNowFilter],
  components: { Spinner, ReplyModal },
  data() {
    return {
      likeTweets: [],
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
      isProcessing: false
    }
  },
  created() {
    const { id } = this.$route.params

    this.fetchLikeTweets(id)
  },
  methods: {
    async fetchLikeTweets(id) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.get.likes({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.likeTweets = data.map((likeTweet) => ({
          id: likeTweet.id,
          tweetId: likeTweet.TweetId,
          userId: likeTweet.Tweet.User.id,
          createdAt: likeTweet.createdAt,
          name: likeTweet.Tweet.User.name,
          account: likeTweet.Tweet.User.account,
          avatar: likeTweet.Tweet.User.avatar,
          description: likeTweet.Tweet.description,
          replyCount: likeTweet.Tweet.replyCount,
          likeCount: likeTweet.Tweet.likeCount,
          isLiked: likeTweet.Tweet.isLiked
        }))

        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法載入喜歡的推文，請稍後在試'
        })
      }
    },
    async addLike(id) {
      try {
        this.isProcessing = true

        const { data } = await usersAPI.like({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.likeTweets = this.likeTweets.map((likeTweet) => {
          if (likeTweet.tweetId !== id) {
            return likeTweet
          } else {
            return {
              ...likeTweet,
              isLiked: 1,
              likeCount: likeTweet.likeCount + 1
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

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法按讚，請稍後再試'
        })
      }
    },
    async deleteLike(id) {
      try {
        this.isProcessing = true

        const { data } = await usersAPI.unlike({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        if (
          this.currentUser.id.toString() === this.$route.params.id.toString()
        ) {
          this.likeTweets = this.likeTweets.filter(
            (likeTweet) => likeTweet.tweetId !== id
          )
        }

        this.likeTweets = this.likeTweets.map((likeTweet) => {
          if (likeTweet.tweetId !== id) {
            return likeTweet
          } else {
            return {
              ...likeTweet,
              isLiked: 0,
              likeCount: likeTweet.likeCount - 1
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
          title: '無法取消讚，請稍後再試'
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
    async deleteTweet(id) {
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

        const { data } = await tweetsAPI.delete({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.likeTweets = this.likeTweets.filter(
          (likeTweet) => likeTweet.tweetId !== id
        )

        Toast.fire({
          icon: 'success',
          title: '成功刪除推文'
        })

        this.$store.commit('triggerUserTweetsRender')
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法刪除推文，請稍後再試'
        })
      }
    },
    leadToTweetDetail(id) {
      this.$router.push({
        name: 'tweets',
        params: { id }
      })
    }
  },
  computed: {
    ...mapState(['currentUser', 'renderUserAction'])
  },
  watch: {
    renderUserAction: {
      handler: function () {
        const { id } = this.$route.params

        this.fetchLikeTweets(id)
      },
      deep: true
    },
    $route: {
      handler: function () {
        const { id } = this.$route.params

        this.fetchLikeTweets(id)
      },
      deep: true
    }
  }
}
</script>
