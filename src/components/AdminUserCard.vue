<template>
  <div class="admin__user__container">
    <div class="admin__user__container__title">使用者列表</div>
    <div class="scrollbar d-flex">
      <div class="admin__user__container__users">
        <div>
          <img
            class="admin__user__container__users__cover"
            src="https://static.popdaily.com.tw/wp-content/uploads/2020/07/dm8zfj74l1c0480g48ww0wo8gqqke3o-1000x625.png"
            alt=""
          />
        </div>
        <div class="text-center">
          <div>
            <img
              class="admin__user__container__users__img"
              src="../assets/images/avatar.svg"
              alt=""
            />
          </div>
          <div class="admin__user__container__users__name__account">
            <div class="admin__user__container__users__name">John Doe</div>
            <div class="admin__user__container__users__account">@heyJohn</div>
          </div>
          <div  class="admin__user__container__users__tweets__likes">
            <span
              ><img
                class="admin__user__container__users__tweets"
                src=""
                alt=""
              /><span class="admin__user__container__users__tweets__count"
                >1.5k</span
              ></span
            >
            <span
              ><img
                class="admin__user__container__users__likes"
                src=""
                alt=""
              /><span class="admin__user__container__users__likes__count"
                >20k</span
              ></span
            >
          </div>
          <div  class="admin__user__container__users__followings__followers">
            <span class="admin__user__container__users__followings"
              ><span class="admin__user__container__users__followings__count"
                >34個</span
              >跟隨中</span
            ><span class="admin__user__container__users__followers"
              ><span class="admin__user__container__users__followers__count"
                >59位</span
              >跟隨者</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin__user__container {
  margin: 0;
  padding: 0;
  border-left: 1px solid var(--border);
  border-right: 1px solid var(--border);
}

.admin__user__container__title {
  padding: 24px 20px;
  border-bottom: 1px solid var(--border);
  font-size: 24px;
  font-weight: 700;
}
.admin__user__container__users {
  position: relative;
  margin: 16px 8px 0 8px;
  background: #f6f7f8;
  height: 315px;
}
.admin__user__container__users__cover {
  width: 250px;
  height: 140px;
  border-radius: 10px 10px 0 0;
}
.scrollbar {
  flex-wrap: wrap;
}
.admin__user__container__users__img {
  position: absolute;
  transform: translateX(-50%);
  top: 23%;
  width: 100px;
  height: 100px;
  border: 4px solid white;
  border-radius: 50%;
}
.admin__user__container__users__name {
  margin-top: 32px;
}

.admin__user__container__users__tweets__likes {
  margin-top: 20px;
  margin-bottom: 10px;
}

.admin__user__container__users__tweets__likes {
  margin-top: 21.5px;
}

.admin__user__container__users__tweets__count {
  margin-right: 18px;
}
.admin__user__container__users__followings {
  margin-right: 8px;
}
</style>
