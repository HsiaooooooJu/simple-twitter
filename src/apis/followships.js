import { apiHelper } from '../utils/helpers'

export default {
  // 現在使用者把其他使用者加入追蹤清單
  addFollowing({ id }) {
    return apiHelper.post('/followships', { id })
  },

  // 現在使用者把其他使用者從追蹤清單刪除
  deleteFollowing({ id }) {
    return apiHelper.delete(`/followships/${id}`)
  }
}
