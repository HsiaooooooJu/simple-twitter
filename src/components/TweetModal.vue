<template>
  <div class="tweet__modal__overlay">
    <div class="tweet__modal">
      <div class="tweet__modal__close">
        <button
          class="tweet__modal__close__button"
          @click="$emit('close-modal')"
        >
          <img
            class="tweet__modal__close__button__img"
            src="../assets/images/close.svg"
            alt=""
          />
        </button>
      </div>
      <form
        class="tweet__modal__content d-flex"
        @submit.stop.prevent="handleSubmit"
      >
        <img
          class="tweet__modal__content__img"
          :src="currentUser.avatar | emptyImage"
          alt=""
        />
        <textarea
          v-model="description"
          class="tweet__modal__content__textarea scrollbar"
          name="description"
          placeholder="有什麼新鮮事 ?"
        ></textarea>
        <span class="tweet__modal__content__length"
          >{{ description.length }}/140</span
        >
        <span
          v-show="description.length > 140"
          class="tweet__modal__content__notice"
          >字數不可超過 140 字</span
        >
        <span v-show="!description.length" class="tweet__modal__content__notice"
          >內容不可空白</span
        >
        <button class="tweet__modal__content__button" :disabled="isProcessing">
          推文
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import tweetsAPI from '../apis/tweets'
import { mapState } from 'vuex'
import { emptyImageFilter } from '../utils/mixins'
import { Toast } from '../utils/helpers'

export default {
  name: 'TweetModal',
  mixins: [emptyImageFilter],
  data() {
    return {
      description: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.isProcessing = true
        this.description = this.description.trim()

        if (!this.description || this.description.length > 140) {
          Toast.fire({
            icon: 'warning',
            title: '請檢查內容是否填寫正確'
          })
          this.isProcessing = false
          return
        }

        const { data } = await tweetsAPI.create({
          description: this.description
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.description = ''

        Toast.fire({
          icon: 'success',
          title: '成功建立推文'
        })

        this.$emit('close-modal')
        this.$store.commit('triggerRender')
        this.$router.push({ name: 'home' })
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false

        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法新增推文，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
