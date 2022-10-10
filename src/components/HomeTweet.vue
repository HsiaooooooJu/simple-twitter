<template>
  <div class="home-tweet__container">
    <h4 class="home-tweet__container__title">首頁</h4>
    <div class="home-tweet__container__tweet-box d-flex">
      <img
        :src="currentUser.avatar | emptyImage"
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
      <Spinner v-if="isLoading" />
      <div
        v-else
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
                @click="fetchTweet(tweet.id)"
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
    <Spinner v-if="isLoading" />
    <ReplyModal
      v-else
      v-show="showModal"
      :reply-tweet="tweet"
      @close-modal="showModal = false"
    />
  </div>
</template>

<script>
import tweetsAPI from '../apis/tweets'
import {
  emptyImageFilter,
  fromNowFilter,
  atAccountFilter
} from '../utils/mixins'
import { Toast } from '../utils/helpers'
import ReplyModal from '../components/ReplyModal.vue'
import { mapState } from 'vuex'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'HomeTweet',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  components: { ReplyModal, Spinner },
  data() {
    return {
      tweets: [],
      tweet: {
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

        this.tweet = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法取得推文資料，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
