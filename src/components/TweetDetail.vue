<template>
  <div class="home-tweet__container d-flex flex-column">
    <div
      class="home-tweet__container__title d-flex cursor-pointer"
      @click="$router.push('/home')"
    >
      <img
        src="../assets/images/back.svg"
        alt=""
        class="home-tweet__container__title__img"
      />
      <h4>推文</h4>
    </div>

    <div class="home-tweet__container__tweet d-flex flex-column">
      <div class="home-tweet__container__tweet__title d-flex">
        <img
          :src="tweet.user.avatar | emptyImage"
          alt=""
          class="home-tweet__container__tweet__title__img"
        />
        <div class="home-tweet__container__tweet__title__box">
          <div class="home-tweet__container__tweet__title__box__name">
            {{ tweet.user.name }}
          </div>
          <div class="home-tweet__container__tweet__title__box__account">
            {{ tweet.user.account | atAccount }}
          </div>
        </div>
      </div>
      <div class="home-tweet__container__tweet__description">
        {{ tweet.description }}
      </div>
      <div class="home-tweet__container__tweet__createdAt">
        {{ tweet.createdAt | fromNow }}
      </div>
    </div>
    <div class="home-tweet__container__tweet__num d-flex">
      <div class="home-tweet__container__tweet__num__box">
        <span class="home-tweet__container__tweet__num__box__count num-font">{{
          tweet.replyCount
        }}</span>
        <span class="home-tweet__container__tweet__num__box__unit">回覆</span>
      </div>
      <div class="home-tweet__container__tweet__num__box">
        <span class="home-tweet__container__tweet__num__box__count num-font">{{
          tweet.likeCount
        }}</span>
        <span class="home-tweet__container__tweet__num__box__unit"
          >喜歡次數</span
        >
      </div>
    </div>

    <div class="home-tweet__container__tweet d-flex">
      <button class="home-tweet__container__tweet__icon">
        <img src="../assets/images/reply.svg" alt="" />
      </button>
      <button
        v-if="!tweet.isLiked"
        @click.prevent.stop="like(tweet.id)"
        class="home-tweet__container__tweet__icon"
      >
        <img src="../assets/images/unlike.svg" alt="" />
      </button>
      <button
        v-else
        @click.prevent.stop="unlike(tweet.id)"
        class="home-tweet__container__tweet__icon"
      >
        <img src="../assets/images/like.svg" alt="" />
      </button>
    </div>

    <div class="home-tweet__container__reply-list scrollbar">
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
        <img
          :src="reply.User.avatar | emptyImage"
          class="home-tweet__container__tweet-list__tweet__avatar"
          alt=""
        />
        <div
          class="home-tweet__container__tweet-list__tweet__text d-flex flex-column"
        >
          <div class="tweet-list__tweet__title d-flex">
            <div class="tweet-list__tweet__title__name">
              {{ reply.User.name }}
            </div>
            <div class="tweet-list__tweet__title__account">
              {{ reply.Tweet.User.account | atAccount }}
            </div>
            <span class="tweet-list__tweet__title__separator">・</span>
            <div class="tweet-list__tweet__title__createdAt">
              {{ reply.createdAt | fromNow }}
            </div>
          </div>
          <div
            class="home-tweet__container__tweet-list__tweet__text__reply d-flex"
          >
            <span class="tweet-list__tweet__reply">回覆</span>
            <span class="tweet-list__tweet__reply-to">{{
              reply.Tweet.User.account | atAccount
            }}</span>
          </div>

          <div
            class="home-tweet__container__tweet-list__tweet__text__description"
          >
            {{ reply.comment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  emptyImageFilter,
  fromNowFilter,
  atAccountFilter
} from '../utils/mixins'

import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'

import usersAPI from '../apis/users'

export default {
  name: 'TweetDetail',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  props: {
    initialTweet: {
      type: Object,
      required: true
    },
    initialReplies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tweet: this.initialTweet,
      replies: this.initialReplies,
      isLiked: this.initialTweet.isLiked
    }
  },
  created() {
    console.log(this.tweet)
  },
  methods: {
    async like(id) {
      try {
        const { data } = await usersAPI.like({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweet = {
          ...this.tweet,
          isLiked: 1
        }

        Toast.fire({
          icon: 'success',
          title: '按讚成功！你真是個好人～'
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法按讚，請稍後再試'
        })
      }
    },
    async unlike(id) {
      try {
        const { data } = await usersAPI.unlike({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.tweet = {
          ...this.tweet,
          isLiked: 0
        }

        Toast.fire({
          icon: 'success',
          title: '不要取消嘛～～～'
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消喜歡，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
