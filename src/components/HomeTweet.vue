<template>
  <div class="home-tweet__container">
    <h4 class="home-tweet__container__title">首頁</h4>
    <div class="home-tweet__container__tweet-box d-flex">
      <img
        src="../assets/images/avatar.svg"
        class="home-tweet__container__tweet-box__img"
        alt=""
      />
      <textarea
        class="home-tweet__container__tweet-box__input"
        type="text"
        name="post-tweet"
        placeholder="有什麼新鮮事？"
      />
      <button class="home-tweet__container__tweet-box__btn">推文</button>
    </div>

    <div class="home-tweet__container__tweet-list scrollbar">
      <div
        v-for="tweet in tweets"
        :key="tweet.id"
        class="home-tweet__container__tweet-list__tweet d-flex"
      >
        <img
          :src="tweet.User.avatar | emptyImage"
          class="home-tweet__container__tweet-list__tweet__avatar"
          alt=""
        />
        <div
          class="home-tweet__container__tweet-list__tweet__text d-flex flex-column"
        >
          <div class="tweet-list__tweet__title d-flex">
            <div class="tweet-list__tweet__title__name">
              {{ tweet.User.name }}
            </div>
            <div class="tweet-list__tweet__title__account">
              {{ tweet.User.account | atAccount }}
            </div>
            <span class="tweet-list__tweet__title__separator">・</span>
            <div class="tweet-list__tweet__title__createdAt">
              {{ tweet.createdAt | fromNow }}
            </div>
          </div>
          <div
            class="home-tweet__container__tweet-list__tweet__text__description"
          >
            {{ tweet.description }}
          </div>
          <div class="tweet-list__tweet__action d-flex">
            <div class="tweet-list__tweet__action__reply d-flex">
              <img
                src="../assets/images/reply.svg"
                class="tweet-list__tweet__action__reply__icon cursor-pointer"
                alt=""
              />
              <div class="tweet-list__tweet__action__reply__count num-font">
                {{ tweet.replyCount }}
              </div>
            </div>
            <div class="tweet-list__tweet__action__like d-flex">
              <img
                src="../assets/images/unlike.svg"
                alt=""
                class="tweet-list__tweet__action__like__icon cursor-pointer"
              />
              <div class="tweet-list__tweet__action__like__count num-font">
                {{ tweet.likeCount }}
              </div>
            </div>
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

export default {
  name: 'HomeTweet',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  props: {
    initialTweets: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tweets: this.initialTweets,
      isLoading: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
