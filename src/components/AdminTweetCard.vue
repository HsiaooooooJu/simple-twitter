<template>
  <div class="admin__tweet__container">
    <div class="admin__tweet__container__title">推文清單</div>
    <div class="admin__tweet__container__tweets d-flex">
      <img
        class="admin__tweet__container__tweets__image cursor-pointer"
        src="../assets/images/avatar.svg"
        alt=""
      />
      <div class="admin__tweet__container__tweets__description">
        <div class="d-flex justify-content-between">
          <div>
            <span
              class="admin__tweet__container__tweets__description__name cursor-pointer"
            >
              Apple
            </span>
            <span class="admin__tweet__container__tweets__description__account">
              @apple
            </span>
            <span class="admin__tweet__container__tweets__description__dot"
              >・</span
            >
            <span
              class="admin__tweet__container__tweets__description__createdAt"
            >
              3 小時
            </span>
          </div>
          <div
            class="admin__tweet__container__tweets__description__delete cursor-pointer"
          >
            ×
          </div>
        </div>
        <div class="admin__tweet__container__tweets__description__content">
          {{ description | setEllipsis }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminTweetCard',
  data() {
    return {
      description: '12345678901234567890123456789012345678012345678901234567890'
    }
  },
  filters: {
    setEllipsis(value) {
      const len = 50
      if (value.length > len) {
        return value.slice(0, len) + '...'
      }
      return value
    }
  }
}
</script>
