<template>
  <div class="home-tweet__container__tweet-list__tweet d-flex">
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
            @click="showModal = true"
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
    <ReplyModal
      v-show="showModal"
      :reply-tweet="tweet"
      @close-modal="showModal = false"
    />
  </div>
</template>
<script>
import tweetsAPI from '../apis/tweets'
import usersAPI from '../apis/users'
import ReplyModal from './ReplyModal.vue'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'
import {
  emptyImageFilter,
  fromNowFilter,
  atAccountFilter
} from '../utils/mixins'
import Swal from 'sweetalert2'

export default {
  name: 'HomeDetail',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  components: { ReplyModal },
  props: {
    initialTweet: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tweet: this.initialTweet,
      showModal: false,
      isProcessing: false
    }
  },
  methods: {
    checkTweetReplies(id) {
      this.$router.push({
        name: 'tweets',
        params: { id }
      })
    },
    async like(id) {
      try {
        this.isProcessing = true

        const { data } = await usersAPI.like({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweet.isLiked = true
        this.tweet.likeCount += 1

        Toast.fire({
          icon: 'success',
          title: '按讚成功！你真是個好人～'
        })

        this.isProcessing = false
      } catch (error) {
        console.log(error)

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

        this.tweet.isLiked = false
        this.tweet.likeCount -= 1

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

        Toast.fire({
          icon: 'success',
          title: '成功刪除推文'
        })

        this.$emit('after-delete-tweet', id)
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
    ...mapState(['currentUser'])
  }
}
</script>
