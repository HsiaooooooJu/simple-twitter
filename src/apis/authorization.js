import { apiHelper } from '../utils/helpers'

export default {
  userSignIn({ account, password }) {
    return apiHelper.post('/users/signin', {
      account,
      password
    })
  },
  adminSignIn({ account, password }) {
    return apiHelper.post('/admin/signin', {
      account,
      password
    })
  },
  signUp(formData) {
    return apiHelper.post('/users', formData)
  }
}
