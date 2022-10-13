<template>
  <div class="info__container">
    <div class="info__container">
      <div
        class="info__container__title d-flex cursor-pointer"
        @click="$router.back()"
      >
        <img
          src="../assets/images/back.svg"
          alt=""
          class="info__container__title__img"
        />
        <div class="info__container__title__box d-flex flex-column">
          <h5>{{ user.name }}</h5>
          <div class="info__container__title__box__content">
            {{ userTweetCount }} 推文
          </div>
        </div>
      </div>

      <div class="info__container__user d-flex flex-column">
        <div class="info__container__user__cover-img">
          <img :src="user.cover | emptyCover" alt="" />
        </div>

        <EditModal
          v-if="user.id"
          v-show="showModal"
          :user="user"
          @close="showModal = false"
        />

        <div
          class="info__container__user__btn-panel d-flex justify-content-between"
        >
          <div class="info__container__user__btn-panel__img">
            <img :src="user.avatar | emptyImage" alt="" />
          </div>
          <div
            v-if="isCurrentUser"
            class="info__container__user__btn-panel__btn"
          >
            <button
              class="info__container__user__btn-panel__btn__self"
              @click="showModal = true"
            >
              編輯個人資料
            </button>
          </div>
          <div v-else class="info__container__user__btn-panel__btn d-flex">
            <button class="info__container__user__btn-panel__btn__other-icon">
              <img src="../assets/images/message.svg" alt="" />
            </button>
            <button class="info__container__user__btn-panel__btn__other-icon">
              <img src="../assets/images/noti.svg" alt="" />
            </button>
            <button
              :disabled="isProcessing"
              v-if="isFollowed"
              class="info__container__user__btn-panel__btn__other-following"
              @click.prevent.stop="deleteFollowing(user.id)"
            >
              正在跟隨
            </button>
            <button
              :disabled="isProcessing"
              v-else
              class="info__container__user__btn-panel__btn__other-follow"
              @click.prevent.stop="addFollowing(user.id)"
            >
              跟隨
            </button>
          </div>
        </div>

        <div class="info__container__user__profile d-flex flex-column">
          <h5 class="info__container__user__profile__name">{{ user.name }}</h5>
          <div class="info__container__user__profile__account">
            {{ user.account | atAccount }}
          </div>
          <div class="info__container__user__profile__introduction">
            {{ user.introduction }}
          </div>
          <div class="info__container__user__profile__follow">
            <router-link
              :to="{
                name: 'follow',
                params: { id: user.id },
                query: { followType: '2' }
              }"
              class="info__container__user__profile__follow__num none"
              >{{ user.followingCount }} 個</router-link
            >
            <span class="info__container__user__profile__follow__unit">
              跟隨中</span
            >
            <router-link
              :to="{
                name: 'follow',
                params: { id: user.id },
                query: { followType: '1' }
              }"
              class="info__container__user__profile__follow__num none"
              >{{ user.followerCount }} 位</router-link
            >
            <span class="info__container__user__profile__follow__unit">
              跟隨者</span
            >
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
import usersAPI from '../apis/users'
import followshipsAPI from '../apis/followships'
import { Toast } from '../utils/helpers'
import EditModal from './EditModal.vue'

export default {
  name: 'Info',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  components: {
    EditModal
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    isCurrentUser: {
      type: Boolean,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      userTweetCount: 0,
      isFollowed: this.initialIsFollowed,
      isProcessing: false,
      showModal: false
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchUserTweets(id)
  },
  methods: {
    async fetchUserTweets(id) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.get.tweets({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.userTweetCount = data.length
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
    async addFollowing(id) {
      try {
        this.isProcessing = true

        const { data } = await followshipsAPI.addFollowing({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.isFollowed = true

        Toast.fire({
          icon: 'success',
          title: '成功追蹤！'
        })

        this.$store.commit('triggerPopularUsersRender')
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法追蹤，請稍後再試'
        })
      }
    },
    async deleteFollowing(id) {
      try {
        this.isProcessing = true

        const { data } = await followshipsAPI.deleteFollowing({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.isFollowed = false

        Toast.fire({
          icon: 'success',
          title: '成功取消追蹤 Ｔ＿Ｔ'
        })

        this.$store.commit('triggerPopularUsersRender')
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser', 'renderUserTweets'])
  },
  watch: {
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed
    },
    renderUserTweets: {
      handler: function () {
        const { id } = this.$route.params
        this.fetchUserTweets(id)
      },
      deep: true
    }
  }
}
</script>
