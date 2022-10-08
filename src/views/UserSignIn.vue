<template>
  <div class="container">
    <div class="sign__container d-flex flex-column">
      <div class="sign__container__brand-logo">
        <img src="../assets/images/ac-logo.svg" alt="" />
      </div>
      <h3 class="sign__container__title">登入 Alphitter</h3>

      <form @submit.prevent.stop="userSignIn">
        <div
          class="sign__container__form-row d-flex flex-column form-row-margin"
        >
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
          <label for="password">密碼</label>
          <input
            v-model="password"
            id="password"
            placeholder="請輸入密碼"
            type="password"
            required
          />
        </div>
        <button :disabled="isProcessing" class="sign__container__btn">
          登入
        </button>
      </form>

      <div class="sign__container__link">
        <div class="sign__container__link__wrapper">
          <router-link to="/users/signup"> 註冊 </router-link>
          <div class="sign__container__link__span">・</div>
          <router-link to="/admin/signin"> 後台登入 </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authorizationAPI from '../apis/authorization'
import { Toast } from '../utils/helpers'

export default {
  name: 'UserSignIn',
  data() {
    return {
      account: localStorage.getItem('account') || '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async userSignIn() {
      try {
        if (!this.account || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入帳號和密碼'
          })
          return
        }
        this.isProcessing = true

        const { data } = await authorizationAPI.userSignIn({
          account: this.account,
          password: this.password
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        localStorage.setItem('token', data.token)

        this.$store.commit('setCurrentUser', data.user)

        localStorage.removeItem('account')

        this.$router.push('/home')

        this.isProcessing = false
      } catch (error) {
        this.password = ''
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '帳號或密碼錯誤'
        })
      }
    }
  }
}
</script>
