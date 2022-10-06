<template>
  <div class="container">
    <div class="sign__container">
      <div class="sign__container__brand-logo">
        <img src="../assets/images/ac-logo.svg" alt="" />
      </div>
      <h3 class="sign__container__title">建立你的帳號</h3>
      <SignUpForm :is-processing="isProcessing" @after-submit="afterSubmit" />
      <div class="sign__container__link d-flex justify-content-center">
        <router-link to="/users/signin">取消</router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import SignUpForm from '../components/SignUpForm.vue'
import authorizationAPI from '../apis/authorization'
import { Toast } from './../utils/helpers'

export default {
  name: 'SignUp',
  components: {
    SignUpForm
  },
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
    async afterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await authorizationAPI.signUp(formData)

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        Toast.fire({
          icon: 'success',
          title: '成功註冊！'
        })

        this.$router.push('/users/signin')
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log(error)
      }
    }
  }
}
</script>
