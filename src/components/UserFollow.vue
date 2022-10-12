<template>
  <div class="user__follow__container">
    <div class="user__follow__container__header d-flex">
      <div
        class="user__follow__container__header__back"
        @click="$router.back()"
      >
        <img src="../assets/images/back.svg" alt="" />
      </div>
      <div>
        <div class="user__follow__container__header__user__name">
          {{ userName }}
        </div>
        <div class="user__follow__container__header__tweet__count">
          {{ userTweetCount }} 推文
        </div>
      </div>
    </div>
    <div class="user__follow__container__tab d-flex">
      <button
        class="user__follow__container__tab__followers"
        :class="{ active: this.$route.query.followType === '1' }"
        @click="toggleTab('followers')"
      >
        追隨者
      </button>
      <button
        class="user__follow__container__tab__followings"
        :class="{ active: this.$route.query.followType === '2' }"
        @click="toggleTab('followings')"
      >
        正在追隨
      </button>
    </div>
    <Spinner v-if="isLoading" />
    <div v-else class="user__follow__container__content scrollbar">
      <div v-show="this.$route.query.followType === '1'">
        <div
          v-if="this.followers.length === 0"
          class="user__follow__container__no__content text-center"
        >
          尚無追隨者
        </div>
        <div
          v-else
          v-for="follower in followers"
          :key="follower.id"
          class="user__follow__container__content__followers d-flex"
        >
          <router-link :to="{ name: 'profile', params: { id: follower.id } }">
            <img
              class="user__follow__container__content__img"
              :src="follower.avatar | emptyImage"
              alt=""
            />
          </router-link>
          <div class="user__follow__container__content__container">
            <div
              class="user__follow__container__content__name__button d-flex justify-content-between"
            >
              <router-link
                :to="{ name: 'profile', params: { id: follower.id } }"
                class="user__follow__container__content__name none"
                >{{ follower.name }}</router-link
              >
              <div v-show="currentUser.id !== follower.id">
                <button
                  v-if="follower.isFollowed === 0"
                  class="user__follow__container__content__add__button"
                  :disabled="isProcessing"
                  @click="addFollowing(follower.id)"
                >
                  追隨
                </button>
                <button
                  v-else
                  class="user__follow__container__content__delete__button"
                  :disabled="isProcessing"
                  @click="deleteFollowing(follower.id)"
                >
                  正在跟隨
                </button>
              </div>
            </div>
            <div
              v-if="!follower.introduction"
              class="user__follow__container__content__no__introduction"
            >
              尚無自我介紹
            </div>
            <div v-else class="user__follow__container__content__introduction">
              {{ follower.introduction }}
            </div>
          </div>
        </div>
      </div>
      <div v-show="this.$route.query.followType === '2'">
        <div
          v-if="this.followings.length === 0"
          class="user__follow__container__no__content text-center"
        >
          尚無正在追蹤的使用者
        </div>
        <div
          v-else
          v-for="following in followings"
          :key="following.id"
          class="user__follow__container__content__followings d-flex"
        >
          <router-link :to="{ name: 'profile', params: { id: following.id } }">
            <img
              class="user__follow__container__content__img"
              :src="following.avatar | emptyImage"
              alt=""
            />
          </router-link>
          <div class="user__follow__container__content__container">
            <div
              class="user__follow__container__content__name__button d-flex justify-content-between"
            >
              <router-link
                :to="{ name: 'profile', params: { id: following.id } }"
                class="user__follow__container__content__name none"
                >{{ following.name }}</router-link
              >
              <div v-show="currentUser.id !== following.id">
                <button
                  v-if="following.isFollowed === 0"
                  class="user__follow__container__content__add__button"
                  :disabled="isProcessing"
                  @click.stop.prevent="addFollowing(following.id)"
                >
                  追隨
                </button>
                <button
                  v-else
                  class="user__follow__container__content__delete__button"
                  :disabled="isProcessing"
                  @click.stop.prevent="deleteFollowing(following.id)"
                >
                  正在跟隨
                </button>
              </div>
            </div>
            <div
              v-if="!following.introduction"
              class="user__follow__container__content__no__introduction"
            >
              尚無自我介紹
            </div>
            <div v-else class="user__follow__container__content__introduction">
              {{ following.introduction }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import followshipsAPI from '../apis/followships'
import Spinner from '../components/Spinner.vue'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'
import { emptyImageFilter } from '../utils/mixins'

export default {
  name: 'UserFollow',
  mixins: [emptyImageFilter],
  components: { Spinner },
  data() {
    return {
      userName: '',
      userTweetCount: 0,
      followers: [],
      followings: [],
      isProcessing: false,
      isLoading: false
    }
  },
  created() {
    const { id } = this.$route.params

    if (
      this.$route.query.followType !== '1' &&
      this.$route.query.followType !== '2'
    ) {
      this.$router.push({ name: 'not-found' })
    }

    this.fetchFollowers(id)
    this.fetchFollowings(id)
    this.fetchUserTweets(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = this.$route.params

    if (
      this.$route.query.followType !== '1' &&
      this.$route.query.followType !== '2'
    ) {
      this.$router.push({ name: 'not-found' })
    }

    this.fetchFollowers(id)
    this.fetchFollowings(id)
    this.fetchUserTweets(id)

    next()
  },
  methods: {
    async fetchUserTweets(id) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.get.tweets({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.userName = data[0].User.name
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
    async fetchFollowers(id) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.get.followers({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.followers = data.map((follower) => ({
          id: follower.followerId,
          name: follower.Followers.name,
          avatar: follower.Followers.avatar,
          introduction: follower.Followers.introduction,
          isFollowed: follower.Followers.isFollowed
        }))

        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法取得追隨者資料，請稍後再試'
        })
      }
    },
    async fetchFollowings(id) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.get.followings({ id })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.followings = data.map((following) => ({
          id: following.followingId,
          name: following.Followings.name,
          avatar: following.Followings.avatar,
          introduction: following.Followings.introduction,
          isFollowed: following.Followings.isFollowed
        }))

        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法取得正在追隨的使用者資料，請稍後再試'
        })
      }
    },
    async addFollowing(userId) {
      try {
        this.isProcessing = true

        const { data } = await followshipsAPI.addFollowing({ id: userId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        if (this.$route.query.followType === '1') {
          this.followers = this.followers.map((follower) => {
            if (follower.id !== userId) {
              return follower
            } else {
              return {
                ...follower,
                isFollowed: 1
              }
            }
          })
        } else if (this.$route.query.followType === '2') {
          this.followings = this.followings.map((following) => {
            if (following.id !== userId) {
              return following
            } else {
              return {
                ...following,
                isFollowed: 1
              }
            }
          })
        }

        Toast.fire({
          icon: 'success',
          title: '追蹤成功 !'
        })

        const { id } = this.$route.params

        this.fetchFollowers(id)
        this.fetchFollowings(id)
        this.$store.commit('triggerPopularUsersRender')
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
    async deleteFollowing(userId) {
      try {
        this.isProcessing = true

        const { data } = await followshipsAPI.deleteFollowing({ id: userId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        if (this.$route.query.followType === '1') {
          this.followers = this.followers.map((follower) => {
            if (follower.id !== userId) {
              return follower
            } else {
              return {
                ...follower,
                isFollowed: 0
              }
            }
          })
        } else if (this.$route.query.followType === '2') {
          this.followings = this.followings.map((following) => {
            if (following.id !== userId) {
              return following
            } else {
              return {
                ...following,
                isFollowed: 0
              }
            }
          })
        }

        Toast.fire({
          icon: 'success',
          title: '取消追蹤成功 !'
        })

        const { id } = this.$route.params

        this.fetchFollowers(id)
        this.fetchFollowings(id)
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
    },
    toggleTab(tab) {
      if (tab === 'followers') {
        this.$router.push({
          name: 'follow',
          query: {
            followType: '1'
          }
        })
      } else if (tab === 'followings') {
        this.$router.push({
          name: 'follow',
          query: {
            followType: '2'
          }
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser', 'renderFollow'])
  },
  watch: {
    renderFollow: {
      handler: function () {
        const { id } = this.$route.params

        this.fetchFollowers(id)
        this.fetchFollowings(id)
      },
      deep: true
    }
  }
}
</script>
