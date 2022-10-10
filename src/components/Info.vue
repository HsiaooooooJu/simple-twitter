<template>
  <div class="info__container">
    <div class="info__container">
      <div
        class="info__container__title d-flex cursor-pointer"
        @click="$router.back()"
      >
        <img
          src="../assets/images/back.svg"
          alt=""
          class="info__container__title__img"
        />
        <div class="info__container__title__box d-flex flex-column">
          <h5>{{ user.name }}</h5>
          <div class="info__container__title__box__content">{num} 推文</div>
        </div>
      </div>

      <div class="info__container__user d-flex flex-column">
        <div class="info__container__user__cover-img">
          <img src="../assets/images/cover-img.jpg" alt="" />
        </div>

        <div
          class="info__container__user__btn-panel d-flex justify-content-end"
        >
          <div class="info__container__user__btn-panel__img">
            <img src="../assets/images/avatar.svg" alt="" />
          </div>
          <div
            v-if="isCurrentUser"
            class="info__container__user__btn-panel__btn"
          >
            <button class="info__container__user__btn-panel__btn__self">
              編輯個人資料
            </button>
          </div>
          <div v-else class="info__container__user__btn-panel__btn d-flex">
            <button class="info__container__user__btn-panel__btn__other-icon">
              <img src="../assets/images/message.svg" alt="" />
            </button>
            <button class="info__container__user__btn-panel__btn__other-icon">
              <img src="../assets/images/noti.svg" alt="" />
            </button>
            <button
              v-if="isFollowed"
              class="info__container__user__btn-panel__btn__other-following"
            >
              正在跟隨
            </button>
            <button
              v-else
              class="info__container__user__btn-panel__btn__other-follow"
            >
              跟隨
            </button>
          </div>
        </div>

        <div class="info__container__user__profile d-flex flex-column">
          <h5 class="info__container__user__profile__name">{{ user.name }}</h5>
          <div class="info__container__user__profile__account">
            {{ user.account | atAccount }}
          </div>
          <div class="info__container__user__profile__introduction">
            {{ user.introduction }}
          </div>
          <div class="info__container__user__profile__follow">
            <span class="info__container__user__profile__follow__num"
              >{{ user.followingCount }} 個</span
            >
            <span class="info__container__user__profile__follow__unit">
              跟隨中</span
            >
            <span class="info__container__user__profile__follow__num"
              >{{ user.followerCount }} 位</span
            >
            <span class="info__container__user__profile__follow__unit">
              跟隨者</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  emptyImageFilter,
  fromNowFilter,
  atAccountFilter
} from '../utils/mixins'
import { mapState } from 'vuex'
// import { Toast } from '../utils/helpers'

export default {
  name: 'Info',
  mixins: [emptyImageFilter, fromNowFilter, atAccountFilter],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFollowed: false,
      isCurrentUser: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
