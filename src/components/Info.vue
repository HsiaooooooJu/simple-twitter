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
          <h5>John Doe</h5>
          <div class="info__container__title__box__content">
            {num} 推文
          </div>
        </div>
        
      </div>

      <div class="info__container__user d-flex flex-column">
        <div class="info__container__user__cover-img">
          <img src="../assets/images/cover-img.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
}
</script>