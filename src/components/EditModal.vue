<template>
  <div class="edit-modal__overlay">
    <div class="edit-modal__container d-flex flex-column">
      <div class="edit-modal__container__top d-flex align-items-center">
        <button class="edit-modal__container__top__close">
          <img src="../assets/images/close.svg" alt="" />
        </button>
        <h5 class="edit-modal__container__top__title">編輯個人資料</h5>
        <button class="edit-modal__container__top__save">儲存</button>
      </div>

      <div class="edit-modal__container__cover">
        <img
          src="../assets/images/cover-img.jpg"
          alt=""
          class="edit-modal__container__cover__img"
        />
        <div class="edit-modal__container__cover__icon">
          <button class="edit-modal__container__cover__icon__add">
            <img src="../assets/images/add-image.svg" alt="" />
          </button>
          <button class="edit-modal__container__cover__icon__close">
            <img src="../assets/images/close.svg" alt="" />
          </button>
        </div>

        <button class="edit-modal__container__avatar">
          <img
            src="../assets/images/avatar.svg"
            alt=""
            class="edit-modal__container__avatar__img"
          />
          <img
            src="../assets/images/add-image.svg"
            alt=""
            class="edit-modal__container__avatar__icon align-center"
          />
        </button>

        <form class="edit-modal__container__form">
          <div class="edit-modal__container__form__name d-flex flex-column">
            <label for="name">名稱</label>
            <input
              v-model="name"
              type="text"
              :class="[{ error: !name || name.length > 50 }]"
              id="name"
            />
          </div>

          <div class="d-flex">
            <span v-show="!name" class="edit-modal__container__edit__error"
              >名稱不可為空白</span
            >
            <span
              v-show="name.length > 50"
              class="edit-modal__container__edit__error"
              >名稱不可超過 50 字</span
            >
            <span class="edit-modal__container__edit__letter-count"
              >{{ name.length }}/50</span
            >
          </div>

          <div class="edit-modal__container__form__textarea d-flex flex-column">
            <label for="introduction">自我介紹</label>
            <textarea
              v-model="introduction"
              :class="{ error: introduction.length > 0 }"
              type="text"
            ></textarea>
          </div>

          <div class="d-flex">
            <span
              v-show="introduction.length > 160"
              class="edit-modal__container__edit__error"
              >自我介紹不可超過 160 字</span
            >
            <span class="edit-modal__container__edit__letter-count"
              >{{ introduction.length }}/160</span
            >
          </div>
        </form>
      </div>
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
