<template>
  <div class="sidebar__container">
    <router-link to="/home">
      <img
        class="sidebar__container__logo"
        src="../assets/images/ac-logo.svg"
        alt=""
      />
    </router-link>
    <div
      class="sidebar__container__buttons d-flex flex-column justify-content-between"
    >
      <ul
        v-if="currentUser.role === 'user'"
        class="sidebar__container__buttons__list"
      >
        <li class="sidebar__container__buttons__list__button">
          <router-link class="d-flex" to="/home">
            <span>
              <img
                class="sidebar__container__buttons__list__button__img"
                src="../assets/images/home.svg"
                alt=""
              />
            </span>
            <span class="sidebar__container__buttons__list__button__name">
              首頁</span
            >
          </router-link>
        </li>
        <li class="sidebar__container__buttons__list__button">
          <router-link
            class="d-flex"
            :to="{ name: 'profile', params: { id: currentUser.id } }"
          >
            <span>
              <img
                class="sidebar__container__buttons__list__button__img"
                src="../assets/images/profile.svg"
                alt=""
              />
            </span>
            <span class="sidebar__container__buttons__list__button__name">
              個人資料</span
            >
          </router-link>
        </li>
        <li class="sidebar__container__buttons__list__button">
          <router-link class="d-flex" to="/setting">
            <span>
              <img
                class="sidebar__container__buttons__list__button__img"
                src="../assets/images/setting-01.svg"
                alt=""
              />
            </span>
            <span class="sidebar__container__buttons__list__button__name">
              設定</span
            >
          </router-link>
        </li>
        <button class="sidebar__container__buttons__list__button__tweet">
          推文
        </button>
      </ul>
      <ul v-else class="sidebar__container__buttons__list">
        <li
          v-for="adminTab in adminTabs"
          :key="adminTab.id"
          class="sidebar__container__buttons__list__button"
        >
          <router-link class="d-flex" :to="adminTab.path">
            <span>
              <img
                class="sidebar__container__buttons__list__button__img"
                :src="adminTab.image"
                alt=""
              />
            </span>
            <span class="sidebar__container__buttons__list__button__name">{{
              adminTab.title
            }}</span>
          </router-link>
        </li>
      </ul>
      <div class="sidebar__container__buttons__logout">
        <button class="sidebar__container__buttons__logout__button">
          <router-link class="d-flex" to="/users/signin">
            <span>
              <img
                class="sidebar__container__buttons__logout__button__img"
                src="../assets/images/logout.svg"
                alt=""
              />
            </span>
            <span class="sidebar__container__buttons__logout__button__name"
              >登出</span
            >
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    role: 'admin'
  }
}

export default {
  name: 'Sidebar',
  data() {
    return {
      currentUser: dummyUser.currentUser,
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
      ]
    }
  }
}
</script>
