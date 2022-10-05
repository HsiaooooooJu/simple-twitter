<template>
  <form @submit.prevent.stop="handleSubmit" action="">
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
      <label for="password">密碼</label>
      <input
        v-model="password"
        id="password"
        placeholder="請輸入密碼"
        type="password"
        required
      />
    </div>
    <button class="sign__container__btn">登入</button>
  </form>
</template>

<script>
export default {
  name: 'SignInForm',
  data() {
    return {
      account: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    handleSubmit() {
      console.log('token back')
    }
  }
}
</script>
