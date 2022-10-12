<template>
  <div class="sidebar__container">
    <div>
      <img
        class="sidebar__container__logo"
        src="../assets/images/ac-logo.svg"
        alt=""
      />
    </div>
    <div
      class="sidebar__container__buttons d-flex flex-column justify-content-between"
    >
      <ul v-if="currentUser.role === 'user'">
        <li class="sidebar__container__buttons__list">
          <router-link class="d-flex" to="/home">
            <span>
              <img
                class="sidebar__container__buttons__list__img"
                src="../assets/images/home.svg"
                alt=""
              />
            </span>
            <span class="sidebar__container__buttons__list__name">首頁</span>
          </router-link>
        </li>
        <li class="sidebar__container__buttons__list">
          <router-link
            class="d-flex"
            :to="{ name: 'profile', params: { id: currentUser.id } }"
          >
            <span>
              <img
                class="sidebar__container__buttons__list__img"
                src="../assets/images/profile.svg"
                alt=""
              />
            </span>
            <span class="sidebar__container__buttons__list__name">
              個人資料</span
            >
          </router-link>
        </li>
        <li class="sidebar__container__buttons__list">
          <router-link
            class="d-flex"
            :to="{ name: 'settings', params: { id: currentUser.id } }"
          >
            <span>
              <img
                class="sidebar__container__buttons__list__img"
                src="../assets/images/setting.svg"
                alt=""
              />
            </span>
            <span class="sidebar__container__buttons__list__name">設定</span>
          </router-link>
        </li>
        <button
          class="sidebar__container__buttons__list__tweet"
          @click="showModal = true"
        >
          推文
        </button>
        <TweetModal v-show="showModal" @close-modal="showModal = false" />
      </ul>
      <ul v-else>
        <li
          v-for="adminTab in adminTabs"
          :key="adminTab.id"
          class="sidebar__container__buttons__list"
        >
          <router-link class="d-flex" :to="adminTab.path">
            <span>
              <img
                class="sidebar__container__buttons__list__img"
                :src="adminTab.image"
                alt=""
              />
            </span>
            <span class="sidebar__container__buttons__list__name">{{
              adminTab.title
            }}</span>
          </router-link>
        </li>
      </ul>
      <div>
        <button class="sidebar__container__buttons__logout" @click="logout">
          <router-link class="d-flex" to="/users/signin">
            <span>
              <img
                class="sidebar__container__buttons__logout__img"
                src="../assets/images/logout.svg"
                alt=""
              />
            </span>
            <span class="sidebar__container__buttons__logout__name">登出</span>
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TweetModal from '../components/TweetModal.vue'

export default {
  name: 'Sidebar',
  components: { TweetModal },
  data() {
    return {
      adminTabs: [
        {
          id: 1,
          title: '推文清單',
          image: require('../assets/images/home.svg'),
          path: '/admin/tweets'
        },
        {
          id: 2,
          title: '使用者列表',
          image: require('../assets/images/profile.svg'),
          path: '/admin/users'
        }
      ],
      showModal: false
    }
  },
  methods: {
    logout() {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/users/signin')
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  }
}
</script>
