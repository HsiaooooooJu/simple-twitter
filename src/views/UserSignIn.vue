<template>
  <div class="container">
    <div class="sign__container">
      <div class="sign__container__brand-logo">
        <img src="../assets/images/ac-logo.svg" alt="" />
      </div>
      <h3 class="sign__container__title">登入 Alphitter</h3>
      <SignInForm />
      <div class="sign__container__link">
        <div class="sign__container__link__wrapper">
          <router-link to="/signup"> 註冊 </router-link>
          <div class="sign__container__link__span">・</div>
          <router-link to="/admin/signin"> 後台登入 </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignInForm from '../components/SignInForm.vue'

export default {
  name: 'SignIn',
  components: { SignInForm }
}
</script>
