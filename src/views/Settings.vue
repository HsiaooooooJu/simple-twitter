<template>
  <div>
    <div class="settings__container row">
      <SettingForm />
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
