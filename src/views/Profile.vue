<template>
  <Spinner v-if="isLoading" />
  <div v-else class="container">
    <div class="profile__container row flex-nowrap">
      <div class="profile__container__main col-7">
        <Info :user="user" />
        <NavTab />
        <UserAction />
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
        followerCount: '',
        followingCount: '',
        introduction: ''
      },
      isLoading: true
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchUsers(id)
  },
  methods: {
    async fetchUsers(id) {
      try {
        this.isLoading = true

        const { data } = await usersAPI.get.profile({ id })

        if (data.status === 'error') {
          return new Error(data.message)
        }

        this.user.id = data.id
        this.user.name = data.name
        this.user.account = data.account
        this.user.avatar = data.avatar
        this.user.cover = data.cover
        this.user.followerCount = data.followerCount
        this.user.followingCount = data.followingCount
        this.user.introduction = data.introduction

        this.isLoading = false

      } catch (error) {
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
