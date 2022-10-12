<template>
  <div class="container">
    <div class="profile__container row flex-nowrap">
      <div class="profile__container__main col-7">
        <Spinner v-if="isLoading" />
        <template v-else>
          <Info
            :user="user"
            :is-current-user="currentUser.id === user.id"
            :initial-is-followed="isFollowed"
          />
          <NavTab />
          <UserAction />
        </template>
      </div>
      <PopularUsers class="col-3" />
    </div>
  </div>
</template>

<script>
import PopularUsers from '../components/PopularUsers.vue'
import Info from '../components/Info.vue'
import NavTab from '../components/NavTab.vue'
import UserAction from '../components/UserAction.vue'
import Spinner from '../components/Spinner.vue'
import usersAPI from '../apis/users'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'

export default {
  name: 'Profile',
  components: { Info, NavTab, UserAction, PopularUsers, Spinner },
  data() {
    return {
      user: {
        id: 0,
        name: '',
        account: '',
        avatar: '',
        cover: '',
        introduction: '',
        followerCount: '',
        followingCount: ''
      },
      currentTab: 1,
      isFollowed: false,
      isLoading: true
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchUsers(id)
    this.fetchFollowers(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUsers(id)
    next()
  },
  methods: {
    async fetchUsers(id) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.get.profile({ id })

        if (data.status === 'error') {
          return new Error(data.message)
        }

        this.user = data
        this.user.id = data.id

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料'
        })
      }
    },
    async fetchFollowers(id) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.get.followers({ id })

        this.isFollowed = data.some((item) => {
          return this.currentUser.id === item.followerId
        })

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得跟隨您的使用者資料'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser', 'renderProfile'])
  },
  watch: {
    renderProfile: function () {
      const { id } = this.$route.params
      this.fetchFollowers(id)
    },
    deep: true
  }
}
</script>
