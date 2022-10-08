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
          @keydown.space.prevent
        />
      </div>
      <span class="settings__container__form__error">{{
        !user.account.length ? '帳號不可為空白' : ''
      }}</span>

      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="name">名稱</label>
        <input
          v-model="currentUser.name"
          id="name"
          placeholder="請輸入名稱"
          type="text"
          required
          @keydown.space.prevent
        />
      </div>
      <span class="settings__container__form__error">{{
        user.name.length > 50 ? '名稱不可超過 50 字' : ''
      }}</span>
      <span class="settings__container__form__letter-count"
        >{{ user.name.length }}/50</span
      >

      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="email">Email</label>
        <input
          v-model="currentUser.email"
          id="email"
          placeholder="請輸入 Email"
          type=""
          @keydown.space.prevent
        />
      </div>
      <span class="settings__container__form__error">{{
        !user.email.length ? 'Email 不可為空白' : ''
      }}</span>

      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="password">密碼</label>
        <input
          v-model="currentUser.password"
          id="password"
          placeholder="請輸入密碼"
          type="password"
          @keydown.space.prevent
        />
      </div>
      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="checkPassword">密碼確認</label>
        <input
          v-model="currentUser.checkPassword"
          id="checkPassword"
          placeholder="請再次輸入密碼"
          type="password"
          @keydown.space.prevent
        />
      </div>
      <button
        :disabled="isProcessing"
        class="settings__container__form__btn"
        type="submit"
      >
        {{ isProcessing ? '處理中...' : '儲存' }}
      </button>
    </form>
  </div>
</template>

<script>
import { Toast } from './../utils/helpers'
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
      this.user.password = ''
      this.user.checkPassword = ''
    },
    async updateSettings() {
      try {
        this.isProcessing = true
        //todo
        // 錯誤處理
        if (!this.user.account || !this.user.name || !this.user.email) {
          Toast.fire({
            icon: 'warning',
            title: '帳號、名稱、Email 不可為空白！'
          })
          this.isProcessing = false
          return
        }

        if (!this.user.email.includes('@') || !this.user.email.includes('.')) {
          Toast.fire({
            icon: 'warning',
            title: 'Email 格式錯誤'
          })
          this.isProcessing = false
          return
        }

        const { data } = await usersAPI.setProfile({
          userId: this.user.id,
          account: this.user.account,
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          checkPassword: this.user.checkPassword
        })

        this.user.password = ''
        this.user.checkPassword = ''

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        Toast.fire({
          icon: 'success',
          title: '儲存成功'
        })
        this.isProcessing = false
        this.$router.push('/home')
      } catch (error) {
        console.log(error)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '儲存失敗'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser() {
      const { id } = this.$route.params
      if (id !== this.user.id) {
        this.$route.push('not-found')
        return
      }
      this.setUser(id)
    }
  }
}
</script>
