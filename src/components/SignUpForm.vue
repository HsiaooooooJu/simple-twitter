<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="sign__container__form-row d-flex flex-column">
      <label for="account">帳號</label>
      <input
        v-model="account"
        id="account"
        placeholder="請輸入帳號"
        type="text"
        required
      />
    </div>
    <div class="sign__container__form-row d-flex flex-column">
      <label for="name">名稱</label>
      <input
        v-model="name"
        id="name"
        placeholder="請輸入名稱"
        type="text"
        required
      />
    </div>
    <div class="sign__container__form-row d-flex flex-column">
      <label for="email">Email</label>
      <input
        v-model="email"
        id="email"
        placeholder="請輸入 Email"
        type="email"
        required
      />
    </div>
    <div class="sign__container__form-row d-flex flex-column">
      <label for="password">密碼</label>
      <input
        v-model="password"
        id="password"
        placeholder="請輸入密碼"
        type="password"
        required
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
      />
    </div>
    <button :disabled="isProcessing" class="sign__container__btn" type="submit">
      註冊
    </button>
  </form>
</template>

<script>
import { Toast } from './../utils/helpers'

export default {
  name: 'SignUpForm',
  props: {
    isProcessing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      account: '',
      name: '',
      email: '',
      password: '',
      checkPassword: ''
    }
  },
  methods: {
    handleSubmit(e) {
      this.isProcessing = true

      if (!this.account || !this.name || !this.email || !this.password || !this.checkPassword) {
        Toast.fire({
          icon: 'warning',
          title: '請填寫所有欄位'
        })
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
      
      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  }
}
</script>
