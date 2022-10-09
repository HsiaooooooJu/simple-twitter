import { apiHelper } from '../utils/helpers'

export default {
  // User 新增一則貼文
  create(description) {
    return apiHelper.post('/api/tweets', description)
  },

  // 刪除 User 自己的指定推文
  delete({ id }) {
    return apiHelper.delete(`/tweets/${id}`)
  },

  // 取得所有推文，包括推文作者
  getAll() {
    return apiHelper.get('/tweets')
  },

  // 取得一則指定貼文的詳細資料
  getTweet({ id }) {
    return apiHelper.get(`/tweets/${id}`)
  },

  // 對指定貼文新增一則回覆
  reply(tweet_id, comment) {
    return apiHelper.post(`/tweets/${tweet_id}/replies`), { comment }
  },

  // 取得指定推文的所有回覆
  getReplies({ tweet_id }) {
    return apiHelper.get(`/tweets/${tweet_id}/replies`)
  },
}
