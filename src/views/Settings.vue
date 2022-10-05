<template>
  <div class="settings__container">
    <h4 class="settings__container__title">帳戶設定</h4>
    <SettingForm @after-update-settings="afterUpdateSettings" />
  </div>
</template>

<script>
import SettingForm from '../components/SettingForm.vue';
export default {
  name: 'Settings',
  components: {
    SettingForm
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