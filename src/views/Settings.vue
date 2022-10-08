<template>
  <div class="container">
    <div class="settings__container row">
      <SettingForm class="col-8" />
      <div class="col-2"></div>
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
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
