import { apiHelper } from '../utils/helpers'

export default {
  // User 新增一則貼文
  create({ description }) {
    return apiHelper.post('/tweets', { description })
  },

  // 刪除 User 自己的指定推文
  delete({ tweetId }) {
    return apiHelper.delete(`/tweets/${tweetId}`)
  },

  // 取得所有推文，包括推文作者
  getAll() {
    return apiHelper.get('/tweets')
  },

  // 取得一則指定貼文的詳細資料
  getTweet({ tweetId }) {
    return apiHelper.get(`/tweets/${tweetId}`)
  },

  // 對指定貼文新增一則回覆
  reply(tweetId, formData) {
    return apiHelper.post(`/tweets/${tweetId}/replies`), { ...formData }
  }
}
