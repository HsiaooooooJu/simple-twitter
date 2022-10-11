<template>
  <div class="edit-modal__container d-flex flex-column">

    <div class="edit-modal__container__top d-flex">
      <button class="edit-modal__container__top__close">
        <img src="../assets/images/close.svg" alt="">
      </button>
      <h5 class="edit-modal__container__top__title">編輯個人資料</h5>
      <button class="edit-modal__container__top__save">
        儲存
      </button>
    </div>

    <div class="edit-modal__container__cover">
      <img src="../assets/images/cover-img.jpg" alt="" class="edit-modal__container__cover__img">
      <div class="edit-modal__container__cover__icon d-flex">
        <button class="edit-modal__container__cover__icon__img">
          <img src="../assets/images/add-image.svg" alt="">
        </button>
        <button class="edit-modal__container__cover__icon__img">
          <img src="../assets/images/close.svg" alt="">
        </button>
      </div>

      <button class="edit-modal__container__avatar">
        <img src="../assets/images/avatar.svg" alt="" class="edit-modal__container__avatar__img">
        <img src="../assets/images/add-image.svg" alt="" class="edit-modal__container__avatar__icon">
      </button>
      
      <form>
        <div class="edit-modal__container__edit">
          <label for="name">名稱</label>
          <input v-model="name" type="text" :class="[{error: !name}]" id="name">
        </div>

        <div class="d-flex">
          <span v-show="!user.name" class="edit-modal__container__edit__error"
            >名稱不可為空白</span
          >
          <span
            v-show="user.name.length > 50"
            class="edit-modal__container__edit__error"
            >名稱不可超過 50 字</span
          >
          <span class="edit-modal__container__edit__letter-count"
            >{{ user.name.length }}/50</span
          >
        </div>

        <div class="edit-modal__container__edit">
          <label for="introduction">自我介紹</label>
          <input v-model="introduction" type="text" :class="[{error: introduction > 160}]" id="introduction">
        </div>
        
      </form>
    </div>
  </div>
</template>

<script>
// import {
// emptyImageFilter,
// fromNowFilter,
// atAccountFilter
// } from '../utils/mixins'
import { mapState } from 'vuex'

export default {
  name: 'EditModal',
  data() {
    return {
      name: '',
      introduction: ''
    }
  },
  computed: {
    ...mapState(['currentState'])
  }
}
</script>