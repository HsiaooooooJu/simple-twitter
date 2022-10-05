<template>
  <div class="container">
    <div class="sign__container">
      <div class="sign__container__brand-logo">
        <img src="../assets/images/ac-logo.svg" alt="" />
      </div>
      <h3 class="sign__container__title">後台登入</h3>

      <form @submit.prevent.stop="adminSignIn">
        <div class="sign__container__form-row d-flex flex-column">
          <label for="account">帳號</label>
          <input v-model="account" id="account" placeholder="請輸入帳號" type="text" required />
        </div>
        <div class="sign__container__form-row d-flex flex-column">
          <label for="password">密碼</label>
          <input v-model="password" id="password" placeholder="請輸入密碼" type="password" required />
        </div>
        <button :disabled="isProcessing" class="sign__container__btn">登入</button>
      </form>

      <div class="sign__container__link">
        <div class="sign__container__link__wrapper">
          <router-link to="/users/signin"> 前台登入 </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authorizationAPI from '../apis/authorization'

export default {
  name: 'AdminSignIn',
  data() {
    return {
      account: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async adminSignIn() {
      try {
        this.isProcessing = true
        const { data } = await authorizationAPI.adminSignIn({
          account: this.account,
          password: this.password
        })
        console.log(data)
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log(error)
      }
    }
  }
}
</script>
