<template>
  <div class="container">
    <div class="signin__container">
      <div class="signin__container__brand-logo">
        <img src="../assets/images/ac-logo.svg" alt="" />
      </div>
      <h3 class="signin__container__title">登入 Alphitter</h3>
      <div class="signin__container__form-row d-flex flex-column">
        <label for="account">帳號</label>
        <input id="account" placeholder="請輸入帳號" type="text" />
      </div>
      <div class="signin__container__form-row d-flex flex-column">
        <label for="password">密碼</label>
        <input id="password" placeholder="請輸入密碼" type="text" />
      </div>
      <button class="signin__container__btn">登入</button>
      <div class="signin__container__link">
        <router-link to="#"> 註冊 </router-link>
        <span class="signin__container__link__span">・</span>
        <router-link to="#"> 後台登入 </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      account: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    // handleSubmit() {}
  }
}
</script>
