import { apiHelper } from '../utils/helpers'

export default {
  currentUser() {
    return apiHelper.get('/current_user')
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
  },

  // 使用者編輯自己的 profile
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`), formData
  },

  // 顯示跟隨者數量排列前 10 的使用者
  topFollowers() {
    return apiHelper.get(`/users/top_followers`)
  }
}
