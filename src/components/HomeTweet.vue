<template>
  <div class="home-tweet__container">
    <h4 class="home-tweet__container__title">首頁</h4>
    <div class="home-tweet__container__tweet-box d-flex">
      <img
        src="../assets/images/avatar.svg"
        class="home-tweet__container__tweet-box__img"
        alt=""
      />
      <textarea
        class="home-tweet__container__tweet-box__input"
        type="text"
        name="post-tweet"
        placeholder="有什麼新鮮事？"
      />
      <button class="home-tweet__container__tweet-box__btn">推文</button>
    </div>

    <div class="home-tweet__container__tweet-list">
      <div class="home-tweet__container__tweet-list__tweet">
        <img
          src="../assets/images/avatar.svg"
          class="home-tweet__container__tweet-list__tweet__avatar"
          alt=""
        />
        <div class="home-tweet__container__tweet-list__tweet__text">
          <div class="tweet-list__tweet__title">
            <div class="tweet-list__tweet__title__name">name</div>
            <div class="tweet-list__tweet__title__account">account</div>
            <span>・</span>
            <div class="tweet-list__tweet__title__createdAt">createdAt</div>
          </div>
          <div
            class="home-tweet__container__tweet-list__tweet__text__description"
          >
            description
          </div>
          <div class="tweet-list__tweet__action">
            <div class="tweet-list__tweet__action__reply">
              <img
                src="../assets/images/reply.svg"
                class="tweet-list__tweet__action__reply__icon"
                alt=""
              />
              <div class="tweet-list__tweet__action__reply__count">20</div>
            </div>
            <div class="tweet-list__tweet__action__like">
              <img
                src="../assets/images/unlike.svg"
                alt=""
                class="tweet-list__tweet__action__like__icon"
              />
              <div class="tweet-list__tweet__action__like__count">22</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTweet',
  data() {}
}
</script>
