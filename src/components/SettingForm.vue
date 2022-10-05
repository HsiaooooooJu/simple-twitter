<template>
  <form @submit.stop.prevent="updateSettings">
    <div class="settings__container__form-row d-flex flex-column">
      <label for="account">帳號</label>
      <input v-model="account" id="account" placeholder="請輸入帳號" type="text" required />
    </div>
    <div class="settings__container__form-row d-flex flex-column">
      <label for="name">名稱</label>
      <input v-model="name" id="name" placeholder="請輸入名稱" type="text" required />
    </div>
    <div class="settings__container__form-row d-flex flex-column">
      <label for="email">Email</label>
      <input v-model="email" id="email" placeholder="請輸入 Email" type="email" required />
    </div>
    <div class="settings__container__form-row d-flex flex-column">
      <label for="password">密碼</label>
      <input v-model="password" id="password" placeholder="請輸入密碼" type="password" required />
    </div>
    <div class="settings__container__form-row d-flex flex-column">
      <label for="checkPassword">密碼確認</label>
      <input v-model="checkPassword" id="checkPassword" placeholder="請再次輸入密碼" type="password" required />
    </div>
    <button :disabled="isProcessing" class="settings__container__btn" type="submit">
      儲存
    </button>
  </form>
</template>

<script>
export default {
  name: 'SettingForm',
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
    updateSettings(e) {
      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-update-settings', formData)
    }
  }
}
</script>