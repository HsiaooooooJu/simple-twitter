<template>
  <div class="edit-modal__overlay">
    <div class="edit-modal__container d-flex flex-column">
      <form @submit.prevent.stop="updateProfile">
        <div class="edit-modal__container__top d-flex align-items-center">
          <button
            class="edit-modal__container__top__close"
            @click="$emit('close')"
          >
            <img src="../assets/images/close.svg" alt="" />
          </button>
          <h5 class="edit-modal__container__top__title">編輯個人資料</h5>
          <button class="edit-modal__container__top__save">
            {{ isProcessing ? '處理中' : '儲存' }}
          </button>
        </div>

        <div class="edit-modal__container__cover">
          <img
            :src="profile.cover | emptyCover"
            alt=""
            class="edit-modal__container__cover__img"
          />
          <div class="edit-modal__container__cover__icon">
            <button
              class="edit-modal__container__cover__icon__add"
              @change="handleCoverChange"
            >
              <img src="../assets/images/add-image.svg" alt="" />
            </button>
            <button class="edit-modal__container__cover__icon__close">
              <img src="../assets/images/close.svg" alt="" />
            </button>
          </div>

          <button class="edit-modal__container__avatar">
            <img
              :src="profile.avatar | emptyImage"
              alt=""
              class="edit-modal__container__avatar__img"
              @change="handleAvatarChange"
            />
            <img
              src="../assets/images/add-image.svg"
              alt=""
              class="edit-modal__container__avatar__icon align-center"
            />
          </button>

          <div class="edit-modal__container__form">
            <div class="edit-modal__container__form__name d-flex flex-column">
              <label for="name">名稱</label>
              <input
                v-model="profile.name"
                type="text"
                :class="[{ error: !profile.name || profile.name.length > 50 }]"
                id="name"
              />
            </div>

            <div class="d-flex">
              <span
                v-show="!profile.name"
                class="edit-modal__container__edit__error"
                >名稱不可為空白</span
              >
              <span
                v-show="profile.name.length > 50"
                class="edit-modal__container__edit__error"
                >名稱不可超過 50 字</span
              >
              <span class="edit-modal__container__edit__letter-count"
                >{{ profile.name.length }}/50</span
              >
            </div>

            <div
              class="edit-modal__container__form__textarea d-flex flex-column"
            >
              <label for="introduction">自我介紹</label>
              <textarea
                v-model="profile.introduction"
                :class="{ error: profile.introduction.length > 160 }"
                type="text"
              ></textarea>
            </div>

            <div class="d-flex">
              <span
                v-show="profile.introduction.length > 160"
                class="edit-modal__container__edit__error"
                >自我介紹不可超過 160 字</span
              >
              <span class="edit-modal__container__edit__letter-count"
                >{{ profile.introduction.length }}/160</span
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'
import usersAPI from '../apis/users'

export default {
  name: 'EditModal',
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      profile: { ...this.user },
      isProcessing: false
    }
  },
  created() {
    this.getProfile()
    console.log(this.name)
  },
  methods: {
    getProfile() {
      // const { profile } = this.user
      // const { id, cover, avatar, name, introduction } = this.user
      this.profile = this.user

      if (this.currentUser.id !== this.user.id) return

      // this.id = id
      // this.name = name
      // this.cover = cover
      // this.avatar = avatar
      // this.introduction = introduction
    },
    handleCoverChange(e) {
      const { files } = e.target
      if (!files.length) return
      const imageURL = window.URL.createObjectURL(files[0])
      this.cover = imageURL
    },
    handleAvatarChange(e) {
      const { files } = e.target
      if (!files.length) return
      const imageURL = window.URL.createObjectURL(files[0])
      this.avatar = imageURL
      console.log(this.avatar)
    },
    async updateProfile(e) {
      try {
        if (!this.name) {
          Toast.fire({
            icon: 'warning',
            title: '名稱不可為空白'
          })
          return
        }

        const form = e.target
        const formData = new FormData(form)

        this.isProcessing = true

        const { data } = await usersAPI.update({
          id: this.id,
          formData
        })
        console.log(data)
        // if (data.status === 'error') {
        //   throw new Error(data.message)
        // }

        this.$emit('close-modal')
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法更新資料，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    user(newValue) {
      this.profile = {
        ...this.profile,
        ...newValue
      }
    }
  }
}
</script>
