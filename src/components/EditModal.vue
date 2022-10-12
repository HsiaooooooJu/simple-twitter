<template>
  <div class="edit-modal__overlay">
    <div class="edit-modal__container d-flex flex-column">
      <form @submit.stop.prevent="updateProfile">
        <div class="edit-modal__container__top d-flex align-items-center">
          <div
            class="edit-modal__container__top__close cursor-pointer"
            @click="$emit('close')"
          >
            <img src="../assets/images/close.svg" alt="" />
          </div>
          <h5 class="edit-modal__container__top__title">編輯個人資料</h5>
          <button type="submit" class="edit-modal__container__top__save">
            {{ isProcessing ? '處理中' : '儲存' }}
          </button>
        </div>

        <!-- cover file input -->
        <div class="edit-modal__container__cover">
          <label for="cover-input">
            <img
              :src="profile.cover | emptyCover"
              alt=""
              class="edit-modal__container__cover__img"
            />
          </label>
          <input
            type="file"
            id="cover-input"
            name="cover"
            class="d-none"
            accept="image/*"
            @change="handleCoverChange"
          />

          <div class="edit-modal__container__cover__icon d-flex">
            <label
              class="edit-modal__container__cover__icon__add"
              for="cover-input"
            >
              <img src="../assets/images/add-image.svg" alt="" />
            </label>

            <div
              class="edit-modal__container__cover__icon__close cursor-pointer"
              @click="initializeCover"
            >
              <img src="../assets/images/close.svg" alt="" />
            </div>
          </div>

          <!-- avatar file input -->
          <div class="edit-modal__container__avatar">
            <label for="avatar-input">
              <img
                :src="profile.avatar | emptyImage"
                alt=""
                class="edit-modal__container__avatar__img"
              />
              <img
                src="../assets/images/add-image.svg"
                alt=""
                class="edit-modal__container__avatar__icon align-center"
              />
            </label>
            <input
              type="file"
              id="avatar-input"
              name="avatar"
              class="d-none"
              accept="image/*"
              @change="handleAvatarChange"
            />
          </div>

          <div class="edit-modal__container__form">
            <div class="edit-modal__container__form__name d-flex flex-column">
              <label for="name">名稱</label>
              <input
                v-model="profile.name"
                type="text"
                :class="[{ error: !profile.name || profile.name.length > 50 }]"
                id="name"
                name="name"
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
                class="scrollbar"
                :class="{ error: profile.introduction.length > 160 }"
                v-model="profile.introduction"
                type="text"
                name="introduction"
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
import usersAPI from '../apis/users'
import { emptyImageFilter } from '../utils/mixins'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'

export default {
  name: 'EditModal',
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      profile: {},
      isProcessing: false
    }
  },
  created() {
    this.getProfile()
    // console.log(this.profile.name)
  },
  methods: {
    getProfile() {
      this.profile = {
        ...this.user,
        ...this.profile
      }
    },
    handleCoverChange(e) {
      const { files } = e.target
      if (!files.length) return this.profile.cover
      const imageURL = window.URL.createObjectURL(files[0])
      this.profile.cover = imageURL
    },
    handleAvatarChange(e) {
      const { files } = e.target
      if (!files.length) return this.profile.avatar
      const imageURL = window.URL.createObjectURL(files[0])
      this.profile.avatar = imageURL
    },
    async updateProfile(e) {
      try {
        if (!this.profile.name) {
          Toast.fire({
            icon: 'warning',
            title: '名稱不可為空白'
          })
          return
        }

        const form = e.target
        const formData = new FormData(form)

        for (let [name, value] of formData.entries()) {
          console.log(name + ': ' + value)
        }

        this.isProcessing = true

        const { data } = await usersAPI.update({
          id: this.profile.id,
          formData
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        Toast.fire({
          icon: 'success',
          title: '已更新個人資料'
        })

        this.$emit('close')
        this.$parent.$parent.fetchUsers(this.profile.id)
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法更新資料，請稍後再試'
        })
      }
    },
    initializeCover() {
      document.querySelector('#cover-input').value = ''
      this.profile.cover = this.user.cover
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
