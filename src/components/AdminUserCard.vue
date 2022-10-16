<template>
  <div class="admin__user__container">
    <div class="admin__user__container__title">使用者列表</div>
    <Spinner v-if="isLoading" />
    <div v-else class="scrollbar d-flex">
      <div
        v-for="user in users"
        :key="user.id"
        class="admin__user__container__users"
      >
        <div>
          <img
            class="admin__user__container__users__cover"
            :src="user.cover | emptyCover"
            alt=""
          />
        </div>
        <div class="admin__user__container__users__description text-center">
          <div>
            <img
              class="admin__user__container__users__img"
              :src="user.avatar | emptyImage"
              alt=""
            />
          </div>
          <div class="admin__user__container__users__name__account">
            <div class="admin__user__container__users__name">
              {{ user.name }}
            </div>
            <div class="admin__user__container__users__account">
              {{ user.account | atAccount }}
            </div>
          </div>
          <div class="admin__user__container__users__tweets__likes">
            <span class="admin__user__container__users__tweets">
              <span>
                <img
                  class="admin__user__container__users__tweets__img"
                  src="../assets/images/tweets.svg"
                  alt=""
                />
              </span>
              <span
                class="admin__user__container__users__tweets__count num-font"
              >
                {{ user.tweetCount }}
              </span>
            </span>
            <span class="admin__user__container__users__likes">
              <span>
                <img
                  class="admin__user__container__users__likes__img"
                  src="../assets/images/unlike.svg"
                  alt=""
                />
              </span>
              <span
                class="admin__user__container__users__likes__count num-font"
              >
                {{ user.likeCount }}
              </span>
            </span>
          </div>
          <div class="admin__user__container__users__followings__followers">
            <span class="admin__user__container__users__followings">
              <span
                class="admin__user__container__users__followings__count num-font"
              >
                {{ user.followingCount }}</span
              ><span class="admin__user__container__users__followings__count">
                個</span
              ><span class="admin__user__container__users__followings__name"
                >跟隨中
              </span>
            </span>
            <span class="admin__user__container__users__followers">
              <span
                class="admin__user__container__users__followers__count num-font"
              >
                {{ user.followerCount }}</span
              >
              <span class="admin__user__container__users__followers__count">
                位</span
              ><span class="admin__user__container__users__followers__name"
                >跟隨者
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from '../apis/admin'
import Spinner from '../components/Spinner.vue'
import { emptyImageFilter, atAccountFilter } from '../utils/mixins'
import { Toast } from '../utils/helpers'

export default {
  name: 'AdminUserCard',
  mixins: [emptyImageFilter, atAccountFilter],
  components: {
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: false
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true

        const { data } = await adminAPI.users.get()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.users = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>
