<template>
  <div class="not-found__container not-found">
    <div class="not-found__container__title">404</div>
    <img src="../assets/images/not-found.svg" alt="" />
    <h3 class="not-found__container__content">PAGE NOT FOUND</h3>
  </div>
</template>

<script>
export default {
  name: 'NotFound',

  created() {
    this.logout()
  },
  methods: {
    logout() {
      this.$store.commit('revokeAuthentication')
    }
  }
}
</script>
