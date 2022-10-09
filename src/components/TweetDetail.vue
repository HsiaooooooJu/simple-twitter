<template>
  <div class="home-tweet__container d-flex flex-column">
    <div class="home-tweet__container__title d-flex">
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
          src="../assets/images/avatar.svg"
          alt=""
          class="home-tweet__container__tweet__title__img"
        />
        <div class="home-tweet__container__tweet__title__box">
          <div class="ome-tweet__container__tweet__title__box__name">name</div>
          <div class="home-tweet__container__tweet__title__box__account">
            account
          </div>
        </div>
      </div>
      <div class="home-tweet__container__tweet__description">description</div>
      <div class="home-tweet__container__tweet__fromNow">
        <div class="home-tweet__container__tweet__fromNow__time">
          {time}・{date}
        </div>
      </div>
    </div>
    <div class="home-tweet__container__tweet__num d-flex">
      <div class="home-tweet__container__tweet__num__box">
        <span class="home-tweet__container__tweet__num__box__count num-font"
          >34</span
        >
        <span class="home-tweet__container__tweet__num__box__unit">回覆</span>
      </div>
      <div class="home-tweet__container__tweet__num__box">
        <span class="home-tweet__container__tweet__num__box__count num-font"
          >808</span
        >
        <span class="home-tweet__container__tweet__num__box__unit"
          >喜歡次數</span
        >
      </div>
    </div>

    <div class="home-tweet__container__tweet d-flex">
      <button class="home-tweet__container__tweet__icon">
        <img src="../assets/images/reply.svg" alt="" />
      </button>
      <button v-if="!isLiked" class="home-tweet__container__tweet__icon">
        <img src="../assets/images/unlike.svg" alt="" />
      </button>
      <button v-else class="home-tweet__container__tweet__icon">
        <img src="../assets/images/like.svg" alt="" />
      </button>
    </div>

    <div class="home-tweet__container__tweet-list scrollbar">
      <div class="home-tweet__container__tweet-list__tweet d-flex">
        <img
          src=""
          class="home-tweet__container__tweet-list__tweet__avatar"
          alt=""
        />
        <div
          class="home-tweet__container__tweet-list__tweet__text d-flex flex-column"
        >
          <div class="tweet-list__tweet__title d-flex">
            <div class="tweet-list__tweet__title__name">
              <!-- {{ tweet.User.name }} -->
              name
            </div>
            <div class="tweet-list__tweet__title__account">
              <!-- {{ tweet.User.account | atAccount }} -->
              account
            </div>
            <span class="tweet-list__tweet__title__separator">・</span>
            <div class="tweet-list__tweet__title__createdAt">
              <!-- {{ tweet.createdAt | fromNow }} -->
              time
            </div>
          </div>
          <div
            class="home-tweet__container__tweet-list__tweet__text__reply d-flex"
          >
            <span class="tweet-list__tweet__reply">回覆</span>
            <span class="tweet-list__tweet____reply-to"> @apply </span>
          </div>

          <div
            class="home-tweet__container__tweet-list__tweet__text__description"
          >
            <!-- {{ tweet.description }} -->
            lores isump
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
  name: 'TweetDetail',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  data() {
    return {
      isLiked: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
