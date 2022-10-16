import { apiHelper } from '../utils/helpers'

export default {
  // 現在使用者新增一則貼文
  create({ description }) {
    return apiHelper.post('/tweets', { description })
  },

  // 刪除現在使用者自己的指定推文
  delete({ id }) {
    return apiHelper.delete(`/tweets/${id}`)
  },

  // 取得所有推文
  getAll() {
    return apiHelper.get('/tweets')
  },

  // 取得一則指定貼文的詳細資料
  getTweet({ id }) {
    return apiHelper.get(`/tweets/${id}`)
  },

  // 取得指定推文的所有回覆
  getReplies({ tweet_id }) {
    return apiHelper.get(`/tweets/${tweet_id}/replies`)
  },

  // 現在使用者對指定貼文新增一則回覆
  reply({ tweet_id, comment }) {
    return apiHelper.post(`/tweets/${tweet_id}/replies`, { comment })
  },

  // 刪除現在使用者自己的指定回覆
  deleteReply({ tweet_id, id }) {
    return apiHelper.delete(`/tweets/${tweet_id}/replies/${id}`)
  }
}
