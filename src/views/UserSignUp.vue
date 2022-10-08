<template>
  <div class="container">
    <div class="sign__container d-flex flex-column">
      <div class="sign__container__brand-logo">
        <img src="../assets/images/ac-logo.svg" alt="" />
      </div>
      <h3 class="sign__container__title">建立你的帳號</h3>
      <SignUpForm />
      <div class="sign__container__link d-flex justify-content-center">
        <router-link to="/users/signin">取消</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue'

export default {
  name: 'SignUp',
  components: {
    SignUpForm
  }
}
</script>
