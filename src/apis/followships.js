import { apiHelper } from '../utils/helpers'

export default {
  addFollowing({ id }) {
    return apiHelper.post('/followships', { id })
  },
  deleteFollowing({ id }) {
    return apiHelper.delete(`/followships/${id}`)
  }
}
