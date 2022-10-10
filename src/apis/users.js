import { apiHelper } from '../utils/helpers'

export default {
  currentUser() {
    return apiHelper.get('/current_user')
  },

  // 使用者編輯自己的 profile
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`), formData
  },

  // 顯示跟隨者數量排列前 10 的使用者
  topFollowers() {
    return apiHelper.get(`/users/top_followers`)
  },

  // 編輯自己的帳戶設定
  setProfile({ userId, account, name, email, password, checkPassword }) {
    return apiHelper.put(`/users/${userId}/setting`, {
      account,
      name,
      email,
      password,
      checkPassword
    })
  },

  // 對指定推文按 like
  like({ id }) {
    return apiHelper.post(`/tweets/${id}/like`, null)
  },

  // 對指定推文按 like
  unlike({ id }) {
    return apiHelper.post(`/tweets/${id}/unlike`, null)
  },

  get: {
    // 顯示指定用戶的 profile
    profile(userId) {
      return apiHelper.get(`/users/${userId}`)
    },

    // 顯示指定用戶所有的推文
    tweets(userId) {
      return apiHelper.get(`/users/${userId}/tweets`)
    },

    // 顯示指定用戶所有回覆過的推文
    replied(userId) {
      return apiHelper.get(`/users/${userId}/replied_tweets`)
    },

    // 顯示指定用戶所有 like 過的推文
    likes(userId) {
      return apiHelper.get(`/users/${userId}/likes`)
    },

    // 顯示指定用戶所有跟隨中的人
    followings(userId) {
      return apiHelper.get(`/users/${userId}/followings`)
    },

    // 顯示指定用戶所有的跟隨者
    followers(userId) {
      return apiHelper.get(`/users/${userId}/followers`)
    }
  }
}
