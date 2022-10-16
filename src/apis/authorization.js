import { apiHelper } from '../utils/helpers'

export default {
  // 使用者登入
  userSignIn({ account, password }) {
    return apiHelper.post('/users/signin', {
      account,
      password
    })
  },

  // 管理員登入
  adminSignIn({ account, password }) {
    return apiHelper.post('/admin/signin', {
      account,
      password
    })
  },

  // 使用者註冊
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
