<template>
  <div class="container">
    <div class="settings__container row">
      <Sidebar class="col-2" />
      <SettingForm class="col-8" />
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import SettingForm from '../components/SettingForm.vue'
import Sidebar from '../components/Sidebar.vue'
import { mapState } from 'vuex'

export default {
  name: 'Settings',
  components: {
    SettingForm,
    Sidebar
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
