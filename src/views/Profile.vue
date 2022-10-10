<template>
  <Spinner v-if="isLoading" />
  <div v-else class="container">
    <div class="profile__container row flex-nowrap">
      <div class="profile__container__main col-7">
        <Info />
        <NavTab />
        <UserAction />
      </div>
      <PopularUsers class="col-3" />
    </div>
  </div>
</template>

<script>
import PopularUsers from '../components/PopularUsers.vue'
import Info from '../components/Info.vue'
import NavTab from '../components/NavTab.vue'
import UserAction from '../components/UserAction.vue'
import Spinner from '../components/Spinner.vue'


export default {
  name: "Profile",
  components: { Info, NavTab, UserAction, PopularUsers, Spinner },
  data() {
    return {
      isLoading: false
    }
  }
}
</script>