<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="sign__container__form-row d-flex flex-column">
      <label for="account">帳號</label>
      <input
        v-model="account"
        :class="{ error: !account }"
        id="account"
        placeholder="請輸入帳號"
        type="text"
        required
        @keydown.space.prevent
      />
    </div>
    <span v-show="!account" class="sign__container__error">帳號不可為空白</span>

    <div class="sign__container__form-row d-flex flex-column">
      <label for="name">名稱</label>
      <input
        v-model="name"
        :class="[{ error: name.length > 50 || !name.length }]"
        id="name"
        placeholder="請輸入名稱"
        type="text"
        required
        @keydown.space.prevent
      />
    </div>
    <div class="d-flex">
      <span v-show="!name.length" class="sign__container__error"
        >名稱不可為空白</span
      >
      <span v-show="name.length > 50" class="sign__container__error"
        >名稱不可超過 50 字</span
      >

      <span class="sign__container__letter-count">{{ name.length }}/50</span>
    </div>

    <div class="sign__container__form-row d-flex flex-column">
      <label for="email">Email</label>
      <input
        v-model="email"
        :class="[{ error: !email.length || !email.includes('@' && '.') }]"
        id="email"
        placeholder="請輸入 Email"
        type="email"
        required
        @keydown.space.prevent
      />
    </div>

    <span v-show="!email.length" class="sign__container__error"
      >Email 不可為空白</span
    >
    <span
      v-show="email.length > 0 && !email.includes('@' && '.')"
      class="sign__container__error"
      >Email 格式錯誤</span
    >

    <div class="sign__container__form-row d-flex flex-column">
      <label for="password">密碼</label>
      <input
        v-model="password"
        id="password"
        placeholder="請輸入密碼"
        type="password"
        required
        @keydown.space.prevent
      />
    </div>

    <div class="sign__container__form-row d-flex flex-column">
      <label for="checkPassword">密碼確認</label>
      <input
        v-model="checkPassword"
        id="checkPassword"
        placeholder="請再次輸入密碼"
        type="password"
        required
        @keydown.space.prevent
      />
    </div>
    <button :disabled="isProcessing" class="sign__container__btn" type="submit">
      {{ isProcessing ? '處理中' : '註冊' }}
    </button>
  </form>
</template>

<script>
import authorizationAPI from '../apis/authorization'
import { Toast } from './../utils/helpers'

export default {
  name: 'SignUpForm',
  data() {
    return {
      account: '',
      name: '',
      email: '',
      password: '',
      checkPassword: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.isProcessing = true

        if (
          !this.account.trim() ||
          !this.name.trim() ||
          !this.email.trim() ||
          !this.password.trim() ||
          !this.checkPassword.trim()
        ) {
          Toast.fire({
            icon: 'warning',
            title: '請填寫所有欄位'
          })
          this.isProcessing = false
          return
        }

        if (this.name.length > 50) {
          Toast.fire({
            icon: 'warning',
            title: '名稱不可超過 50 字'
          })
          this.isProcessing = false
          return
        }

        if (!this.email.includes('@') || !this.email.includes('.')) {
          this.emailError = 'Email 格式錯誤'
          this.isProcessing = false
          return
        }

        if (this.password !== this.checkPassword) {
          Toast.fire({
            icon: 'warning',
            title: '兩次輸入的密碼不同'
          })
          this.isProcessing = false
          this.checkPassword = ''
          return
        }

        localStorage.setItem('account', this.account)

        const { data } = await authorizationAPI.signUp({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        Toast.fire({
          icon: 'success',
          title: '註冊成功'
        })
        this.$router.push('/users/signin')
      } catch (error) {
        this.isProcessing = false
        const e = error.response.data.message
        if (e === 'Account already exists.') {
          Toast.fire({
            icon: 'error',
            title: 'Account 已重複註冊！'
          })
        }
        if (e === 'Email already exists.') {
          Toast.fire({
            icon: 'error',
            title: 'Email 已重複註冊！'
          })
        }
      }
    }
  }
}
</script>
