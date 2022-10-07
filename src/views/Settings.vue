<template>
  <div class="container">
    <div class="settings__container row">
      <Sidebar class="col-3" />
      <SettingForm class="col-7" />
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import SettingForm from '../components/SettingForm.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Settings',
  components: {
    SettingForm,
    Sidebar
  },
  data() {
    return {
      isProcessing: false
    }
  },
  methods: {
    afterUpdateSettings() {
      // todo
      // integrate usersAPI
      console.log('yes')
    }
  }
}
</script>
