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
  signUp({ account, name, email, password, checkPassword }) {
    return apiHelper.post('/users', {
      account,
      name,
      email,
      password,
      checkPassword
    })
  }
}
