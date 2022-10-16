<template>
  <div class="reply__modal__overlay">
    <div class="reply__modal">
      <div class="reply__modal__close">
        <button
          class="reply__modal__close__button"
          @click="$emit('close-modal')"
        >
          <img
            class="reply__modal__close__button__img"
            src="../assets/images/close.svg"
            alt=""
          />
        </button>
      </div>
      <div class="reply__modal__container">
        <div class="reply__modal__container__tweet d-flex">
          <div>
            <img
              class="reply__modal__container__tweet__img"
              :src="replyTweet.User.avatar | emptyImage"
              alt=""
            />
            <div class="reply__modal__container__tweet__line"></div>
          </div>
          <div>
            <div>
              <span class="reply__modal__container__tweet__name">{{
                replyTweet.User.name
              }}</span>
              <span class="reply__modal__container__tweet__account">{{
                replyTweet.User.account | atAccount
              }}</span>
              <span class="reply__modal__container__tweet__dot">‧</span>
              <span class="reply__modal__container__tweet__createdAt">{{
                replyTweet.createdAt | fromNow
              }}</span>
            </div>
            <div class="reply__modal__container__tweet__description scrollbar">
              {{ replyTweet.description }}
            </div>
            <div>
              <span class="reply__modal__container__tweet__reply__title">
                回覆給
              </span>
              <span class="reply__modal__container__tweet__reply__target">
                {{ replyTweet.User.name | atAccount }}
              </span>
            </div>
          </div>
        </div>
        <form
          class="reply__modal__container__reply d-flex"
          @submit.stop.prevent="handleSubmit()"
        >
          <img
            class="reply__modal__container__reply__img"
            :src="currentUser.avatar | emptyImage"
            alt=""
          />
          <textarea
            v-model="comment"
            class="reply__modal__container__reply__textarea scrollbar"
            name="comment"
            placeholder="推你的回覆"
          ></textarea>
          <span class="reply__modal__container__reply__length"
            >{{ comment.length }}/140</span
          >
          <span
            v-show="comment.length > 140"
            class="reply__modal__container__reply__notice"
            >字數不可超過 140 字</span
          >
          <span
            v-show="!comment.length"
            class="reply__modal__container__reply__notice"
            >內容不可空白</span
          >
          <button
            class="reply__modal__container__reply__button"
            :disabled="isProcessing"
          >
            回覆
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import tweetsAPI from '../apis/tweets'
import { mapState } from 'vuex'
import {
  emptyImageFilter,
  fromNowFilter,
  atAccountFilter
} from '../utils/mixins'
import { Toast } from '../utils/helpers'

export default {
  name: 'ReplyModal',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  props: {
    replyTweet: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      comment: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.isProcessing = true
        this.comment = this.comment.trim()

        if (!this.comment || this.comment.length > 140) {
          Toast.fire({
            icon: 'warning',
            title: '請檢查內容是否填寫正確'
          })

          this.isProcessing = false
          return
        }

        const { data } = await tweetsAPI.reply({
          tweet_id: this.replyTweet.id,
          comment: this.comment
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.comment = ''

        Toast.fire({
          icon: 'success',
          title: '成功建立回覆'
        })

        this.$emit('close-modal')
        this.isProcessing = false

        if (this.$route.name !== 'tweets') {
          this.$router.push({
            name: 'tweets',
            params: { id: this.replyTweet.id }
          })
        } else {
          this.$parent.$parent.fetchTweetReplies(this.replyTweet.id)
          this.$parent.$parent.fetchTweet(this.replyTweet.id)
        }
      } catch (error) {
        this.isProcessing = false

        console.log(error)

        const e = error.response.data.message

        if (e === 'The tweet you want to reply does not exist.') {
          Toast.fire({
            icon: 'warning',
            title: '欲回覆的推文不存在'
          })
        } else {
          Toast.fire({
            icon: 'error',
            title: '無法新增回覆，請稍後再試'
          })
        }
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
