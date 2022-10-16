import { apiHelper } from '../utils/helpers'

export default {
  tweets: {
    // 取得使用者的所有推文
    get() {
      return apiHelper.get('/tweets')
    },

    // 管理員刪除指定推文
    delete({ tweetId }) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`)
    }
  },

  users: {
    // 取得使用者與管理員的個人資料
    get() {
      return apiHelper.get('/admin/users')
    }
  }
}
