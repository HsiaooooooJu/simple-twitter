<template>
  <!-- <Spinner v-if="isLoading" /> -->
  <div class="user-reply__container d-flex flex-column">
    <div class="user-reply__container__reply-list scrollbar">
      <div v-for="repliedTweet in repliedTweets" :key="repliedTweet.id"
        class="user-reply__container__reply-list__tweet d-flex"
      >
        <router-link :to="{name: 'profile', params: {id: repliedTweet.User.id}}">
          <img
            :src="repliedTweet.User.avatar | emptyImage"
            class="user-reply__container__reply-list__tweet__avatar"
            alt=""
          />
        </router-link>
        
        <div
          class="user-reply__container__reply-list__tweet__text d-flex flex-column"
        >
          <div class="d-flex justify-content-between">
            <div class="reply-list__tweet__title d-flex">
              <router-link
                :to="{name: 'profile', params: {id: repliedTweet.User.id}}"
                class="reply-list__tweet__title__name none"
              >
                {{ repliedTweet.User.name }}
              </router-link>
              <div class="reply-list__tweet__title__account">
                {{ repliedTweet.User.account | atAccount }}
              </div>
              <span class="reply-list__tweet__title__separator">・</span>
              <div class="reply-list__tweet__title__createdAt">
                {{ repliedTweet.createdAt | fromNow }}
              </div>
            </div>
            <button
              v-show="currentUser"
              class="user-reply__container__reply-list__tweet__text__delete__reply"
              :disabled="isProcessing"
              @click.prevent.stop="deleteReply(repliedTweet.Tweet.id, repliedTweet.id)"
            > x
            </button>
          </div>
          <div
            class="user-reply__container__reply-list__tweet__text__reply d-flex"
          >
            <span class="reply-list__tweet__reply">回覆</span>
            <span class="reply-list__tweet__reply-to">{{ repliedTweet.Tweet.User.account | atAccount }}</span>
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
// import Spinner from '../components/Spinner.vue'
// import ReplyModal from '../components/ReplyModal.vue'

export default {
  name: 'UserReply',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  // components: { ReplyModal, Spinner },
  // props: {
  //   tweet: {
  //     type: Object,
  //     required: true
  //   },
  //   replies: {
  //     type: Array,
  //     required: true
  //   },
  //   isLoading: {
  //     type: Boolean,
  //     required: true
  //   }
  // },
  data() {
    return {
      isProcessing: false,
      repliedTweets: []
      // modalIsLoading: false,
      // showModal: false,
      // replyTweet: {
      //   id: 0,
      //   description: '',
      //   createdAt: '',
      //   replyCount: 0,
      //   likeCount: 0,
      //   isLiked: 0,
      //   User: {
      //     id: 0,
      //     name: '',
      //     account: '',
      //     avatar: ''
      //   }
      // }
    }
  },
  created() {
    const {id} = this.$route.params
    this.fetchRepliedTweets(id)
  },
  methods: {
    async fetchRepliedTweets(id) {
      try {
        this.isProcessing = true

        const { data } = await usersAPI.get.replied({id})
        this.repliedTweets = data

      } catch(error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得回覆資料'
        })
      }
    },
    // async fetchTweet(id) {
    //   try {
    //     this.modalIsLoading = true
    //     this.showModal = true

    //     const { data } = await tweetsAPI.getTweet({ id })

    //     if (data.status === 'error') {
    //       throw new Error(data.message)
    //     }

    //     this.replyTweet = data
    //     this.modalIsLoading = false
    //   } catch (error) {
    //     this.modalIsLoading = false

    //     console.log(error)

    //     Toast.fire({
    //       icon: 'error',
    //       title: '無法取得推文資料，請稍後再試'
    //     })
    //   }
    // },
    // async like(id) {
    //   try {
    //     this.isProcessing = true

    //     const { data } = await usersAPI.like({ id })

    //     if (data.status === 'error') {
    //       throw new Error(data.message)
    //     }

    //     this.$emit('after-like-tweet', id)

    //     Toast.fire({
    //       icon: 'success',
    //       title: '按讚成功！你真是個好人～'
    //     })

    //     this.$parent.fetchTweet(id)
    //     this.isProcessing = false
    //   } catch (error) {
    //     this.isProcessing = false
    //     Toast.fire({
    //       icon: 'error',
    //       title: '無法按讚，請稍後再試'
    //     })
    //   }
    // },
    // async unlike(id) {
    //   try {
    //     this.isProcessing = true

    //     const { data } = await usersAPI.unlike({ id })

    //     if (data.status === 'error') {
    //       throw new Error(data.message)
    //     }

    //     this.$emit('after-unlike-tweet', id)

    //     Toast.fire({
    //       icon: 'success',
    //       title: '不要取消嘛～～～'
    //     })

    //     this.$parent.fetchTweet(id)
    //     this.isProcessing = false
    //   } catch (error) {
    //     this.isProcessing = false
    //     console.log(error)
    //     Toast.fire({
    //       icon: 'error',
    //       title: '無法取消喜歡，請稍後再試'
    //     })
    //   }
    // },
    async deleteReply(tweet_id, id) {
      try {
        this.isProcessing = true

        const { data } = await tweetsAPI.deleteReply({ tweet_id, id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.$emit('after-delete-reply', id)

        Toast.fire({
          icon: 'success',
          title: '成功刪除回覆'
        })

        this.$parent.fetchTweetReplies(tweet_id)
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