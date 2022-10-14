<template>
  <div class="popular__users__container scrollbar">
    <div class="popular__users__container__title">推薦跟隨</div>
    <Spinner v-if="isLoading" />
    <div
      v-else
      v-for="topFollower in topFollowers"
      :key="topFollower.id"
      class="popular__users__container__top__user d-flex"
    >
      <router-link :to="{ name: 'profile', params: { id: topFollower.id } }">
        <img
          class="popular__users__container__top__user__img"
          :src="topFollower.avatar | emptyImage"
          alt=""
        />
      </router-link>
      <div
        class="popular__users__container__top__user__description__button d-flex justify-content-between"
      >
        <div class="popular__users__container__top__user__description">
          <router-link
            :to="{ name: 'profile', params: { id: topFollower.id } }"
            class="popular__users__container__top__user__description__name none"
          >
            {{ topFollower.name }}
          </router-link>
          <div
            class="popular__users__container__top__user__description__account"
          >
            {{ topFollower.account | atAccount }}
          </div>
        </div>
        <div
          v-show="currentUser.id !== topFollower.id"
          class="popular__users__container__top__user__button"
        >
          <button
            v-if="topFollower.isFollowed === 0"
            class="popular__users__container__top__user__button__follow"
            :disabled="isProcessing"
            @click.stop.prevent="addFollowing(topFollower.id)"
          >
            跟隨
          </button>
          <button
            v-else
            class="popular__users__container__top__user__button__following"
            :disabled="isProcessing"
            @click.stop.prevent="deleteFollowing(topFollower.id)"
          >
            正在跟隨
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import followshipsAPI from '../apis/followships'
import { emptyImageFilter, atAccountFilter } from '../utils/mixins'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'PopularUsers',
  mixins: [emptyImageFilter, atAccountFilter],
  components: { Spinner },
  data() {
    return {
      topFollowers: [],
      isLoading: true,
      isProcessing: false
    }
  },
  created() {
    this.fetchTopFollowers()
  },
  methods: {
    async fetchTopFollowers() {
      try {
        const { data } = await usersAPI.topFollowers()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.topFollowers = data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
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

        this.topFollowers = this.topFollowers.map((topFollower) => {
          if (topFollower.id !== id) {
            return topFollower
          } else {
            return {
              ...topFollower,
              isFollowed: 1
            }
          }
        })

        Toast.fire({
          icon: 'success',
          title: '追蹤成功！'
        })

        this.$store.commit('triggerProfileRender')
        this.$store.commit('triggerFollowRender')
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
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

        this.topFollowers = this.topFollowers.map((topFollower) => {
          if (topFollower.id !== id) {
            return topFollower
          } else {
            return {
              ...topFollower,
              isFollowed: 0
            }
          }
        })

        Toast.fire({
          icon: 'success',
          title: '取消追蹤成功！'
        })

        this.$store.commit('triggerProfileRender')
        this.$store.commit('triggerFollowRender')
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
    ...mapState(['currentUser', 'renderPopularUsers'])
  },
  watch: {
    renderPopularUsers: {
      handler: function () {
        this.fetchTopFollowers()
      },
      deep: true
    }
  }
}
</script>
