<template>
  <div class="settings__container__form">
    <h4 class="settings__container__form__title">帳戶設定</h4>
    <form @submit.stop.prevent="updateSettings">
      <div
        class="settings__container__form__form-row d-flex flex-column hover focus"
      >
        <label for="account">帳號</label>
        <input
          v-model="user.account"
          :class="[{ error: !user.account }]"
          id="account"
          placeholder="請輸入帳號"
          type="text"
          required
          @keydown.space.prevent
        />
      </div>
      <span v-show="!user.account" class="settings__container__form__error">{{
        !user.account ? '帳號不可為空白' : ''
      }}</span>

      <div
        class="settings__container__form__form-row d-flex flex-column hover focus"
      >
        <label for="name">名稱</label>
        <input
          v-model="user.name"
          :class="[{ error: !user.name || user.name.length > 50 }]"
          id="name"
          placeholder="請輸入名稱"
          type="text"
          required
          @keydown.space.prevent
        />
      </div>

      <div class="d-flex">
        <span v-show="!user.name" class="settings__container__form__error"
          >名稱不可為空白</span
        >

        <span
          v-show="user.name.length > 50"
          class="settings__container__form__error"
          >名稱不可超過 50 字</span
        >

        <span class="settings__container__form__letter-count"
          >{{ user.name.length }}/50</span
        >
      </div>

      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="email">Email</label>
        <input
          v-model="user.email"
          :class="[
            { error: !user.email.length || !user.email.includes('@' && '.') }
          ]"
          id="email"
          placeholder="請輸入 Email"
          type="email"
          required
          @keydown.space.prevent
        />
      </div>
      <span v-if="!user.email" class="settings__container__form__error"
        >Email 不可為空白</span
      >
      <span
        v-if="user.email.length > 0 && !user.email.includes('@' && '.')"
        class="settings__container__form__error"
        >Email 格式錯誤</span
      >

      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="password">密碼</label>
        <input
          v-model="user.password"
          id="password"
          placeholder="請輸入密碼"
          type="password"
          required
          @keydown.space.prevent
        />
      </div>
      <div class="settings__container__form__form-row d-flex flex-column">
        <label for="checkPassword">密碼確認</label>
        <input
          v-model="user.checkPassword"
          id="checkPassword"
          placeholder="請再次輸入密碼"
          type="password"
          required
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
    if (this.currentUser.id === 0) {
      return
    }
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

        if (
          !this.user.account.trim() ||
          !this.user.name.trim() ||
          !this.user.email.trim()
        ) {
          Toast.fire({
            icon: 'warning',
            title: '帳號、名稱、Email 不可為空白'
          })
          this.isProcessing = false
          return
        }
        if (this.user.name.length > 50) {
          Toast.fire({
            icon: 'warning',
            title: '名稱不可超過 50 字'
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

        if (this.user.password !== this.user.checkPassword) {
          Toast.fire({
            icon: 'warning',
            title: '兩次輸入密碼不同'
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
        this.isProcessing = false
        console.log(error)
        const e = error.response.data.message

        if (e === 'Account already exists.') {
          Toast.fire({
            icon: 'error',
            title: 'Account 已重複註冊！'
          })
        } else if (e === 'Email already exists.') {
          Toast.fire({
            icon: 'error',
            title: 'Email 已重複註冊！'
          })
        } else {
          Toast.fire({
            icon: 'error',
            title: '發生錯誤，請稍後再試'
          })
        }
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
