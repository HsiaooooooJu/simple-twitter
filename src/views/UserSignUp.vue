<template>
  <div class="container">
    <div class="sign__container">
      <div class="sign__container__brand-logo">
        <img src="../assets/images/ac-logo.svg" alt="" />
      </div>
      <h3 class="sign__container__title">建立你的帳號</h3>
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
      <button class="sign__container__btn">註冊</button>
      <div class="sign__container__link d-flex justify-content-center">
        <router-link to="/users/signin">取消</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      account: '',
      name: '',
      email: '',
      password: '',
      checkPassword: ''
    }
  }
}
</script>
