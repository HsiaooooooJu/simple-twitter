<template>
  <div class="nav-tab__container">
    <div v-for="tab in tabs" :key="tab.id" class="nav-tab__container__tab">{{ tab.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'NavTab',
  data() {
    return {
      tabs: [
        {
          id: 1,
          title: '推文'
        },
        {
          id: 2,
          title: '回覆'
        },
        {
          id: 3,
          title: '喜歡的內容'
        }
      ]
    }
  }
}
</script>