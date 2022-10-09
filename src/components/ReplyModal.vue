<template>
  <div class="reply__modal__overlay">
    <div class="reply__modal">
      <div class="reply__modal__close">
        <button
          class="reply__modal__close__button"
          @click="$emit('close-modal')"
        >
          <img
            class="reply__modal__close__button__img"
            src="../assets/images/close.svg"
            alt=""
          />
        </button>
      </div>
      <div>
        <img
          class="reply__modal__content__img"
          :src="currentUser.avatar | emptyImage"
          alt=""
        />
      </div>

      <form
        class="reply__modal__content d-flex"
        @submit.stop.prevent="handleSubmit"
      >
        <img
          class="reply__modal__content__img"
          :src="currentUser.avatar | emptyImage"
          alt=""
        />
        <textarea
          v-model="text"
          class="reply__modal__content__textarea scrollbar"
          name="description"
          placeholder="有什麼新鮮事 ?"
        ></textarea>
        <span class="reply__modal__content__length">{{ text.length }}/140</span>
        <span v-if="text.length > 140" class="reply__modal__content__notice"
          >字數不可超過 140 字</span
        >
        <span v-if="!text.length" class="reply__modal__content__notice"
          >內容不可空白</span
        >
        <button class="reply__modal__content__button">推文</button>
      </form>
    </div>
  </div>
</template>

<script>
import tweetsAPI from '../apis/tweets'
import { emptyImageFilter } from '../utils/mixins'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'ReplyModal',
  mixins: [emptyImageFilter],
  data() {
    return {
      text: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.text = this.text.trim()

        if (!this.text && this.text > 140) {
          return
        }

        const { data } = await tweetsAPI.create({ description: this.text })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.text = ''

        Toast.fire({
          icon: 'success',
          title: '成功建立推文'
        })
        this.$emit('close-modal')
      } catch (error) {
        console.log(error)

        const e = error.response.data.message
        if (e === 'Tweet description must be less than 140 characters long.') {
          Toast.fire({
            icon: 'warning',
            title: '推文不可超過 140 個字'
          })
        } else if (e === 'Tweet description is required.') {
          Toast.fire({
            icon: 'warning',
            title: '推文內容不可空白'
          })
        }
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style scoped>
.reply__modal__overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}

.reply__modal {
  background-color: white;
  width: 635px;
  height: 500px;
  margin-top: 60px;
  border-radius: 16px;
}
.reply__modal__close {
  width: 100%;
  border-bottom: 1px solid #e6ecf0;
  padding: 20px;
  height: 55px;
}

.reply__modal__close__button {
  padding: 0;
  vertical-align: top;
}

.reply__modal__close__button__img {
  width: 15px;
  height: 15px;
}

.reply__modal__content {
  width: 100%;
  height: 245px;
  position: relative;
  padding: 16px;
}

.reply__modal__content__img {
  width: 50px;
  height: 50px;
  margin-left: 8px;
  margin-right: 10px;
  border-radius: 50%;
}

.reply__modal__content__textarea {
  resize: none;
  height: 160px;
  width: 470px;
  font-size: 16px;
  border: none;
  margin-top: 12px;
}

.reply__modal__content__textarea::placeholder {
  font-weight: 500;
}

.reply__modal__content__button {
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  width: 65px;
  height: 40px;
  padding: 8px 16px;
  background: #ff6600;
  border-radius: 50px;
  margin-right: 16px;
  margin-bottom: 16px;
  font-size: 16px;
}

.reply__modal__content__length {
  position: absolute;
  bottom: 65px;
  right: 18px;
  color: #696974;
}

.reply__modal__content__notice {
  position: absolute;
  text-align: end;
  bottom: 26px;
  right: 100px;
  color: red;
}
</style>
