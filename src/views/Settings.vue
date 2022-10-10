<template>
  <div class="container">
    <div class="settings__container row">
      <SettingForm class="col-7" />
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import SettingForm from '../components/SettingForm.vue'
import { mapState } from 'vuex'

export default {
  name: 'Settings',
  components: {
    SettingForm
  },
  beforeRouteUpdate(to, from, next) {
    if (this.currentUser.id !== to.id) {
      next('/home')
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
