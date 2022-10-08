<template>
  <div class="settings__container__form">
    <h4 class="settings__container__form__title">帳戶設定</h4>
    <form @submit.stop.prevent="updateSettings">
      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="account">帳號</label>
        <input
          v-model="currentUser.account"
          id="account"
          placeholder="請輸入帳號"
          type="text"
          required
        />
      </div>
      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="name">名稱</label>
        <input
          v-model="currentUser.name"
          id="name"
          placeholder="請輸入名稱"
          type="text"
          required
        />
      </div>
      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="email">Email</label>
        <input
          v-model="currentUser.email"
          id="email"
          placeholder="請輸入 Email"
          type="email"
          required
        />
      </div>
      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="password">密碼</label>
        <input
          v-model="currentUser.password"
          id="password"
          placeholder="請輸入密碼"
          type="password"
        />
      </div>
      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="checkPassword">密碼確認</label>
        <input
          v-model="currentUser.checkPassword"
          id="checkPassword"
          placeholder="請再次輸入密碼"
          type="password"
        />
      </div>
      <button
        :disabled="isProcessing"
        class="settings__container__form__btn"
        type="submit"
      >
        儲存
      </button>
    </form>
  </div>
</template>

<script>
// import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'
import usersAPI from '../apis/users'

export default {
  name: 'SettingForm',
  data() {
    return {
      user: {
        id: 0,
        account: '',
        name: '',
        email: '',
        password: '',
        checkPassword: ''
      },
      isProcessing: false
    }
  },
  created() {
    const { id } = this.$route.params
    this.setUser(id)
  },
  methods: {
    setUser() {
      this.user = this.currentUser
    },
    async updateSettings() {
      try {
        //todo
        // 錯誤處理
        this.isProcessing = true
        const { data } = await usersAPI.setProfile({
          userId: this.user.id,
          account: this.user.account,
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          checkPassword: this.user.checkPassword
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isProcessing = false

        this.$router.push('/home')
      } catch (error) {
        console.log(error)
        this.isProcessing = false
        // Toast.fire({
        //   icon: 'error',
        //   title: '帳號已存在'
        // })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser() {
      if (!this.user.id) return
      const { id } = this.$route.params
      this.setUser(id)
    }
  }
}
</script>
