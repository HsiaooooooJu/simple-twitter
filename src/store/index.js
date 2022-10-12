import Vue from 'vue'
import Vuex from 'vuex'

import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: 0,
      name: '',
      account: '',
      email: '',
      avatar: '',
      role: ''
    },
    isAuthenticated: false,
    token: '',
    renderTweet: false,
    renderPopularUsers: false,
    renderFollow: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    },
    triggerRender(state) {
      state.renderTweet = !state.renderTweet
    },
    triggerPopularUsersRender(state) {
      state.renderPopularUsers = !state.renderPopularUsers
    },
    triggerFollowRender(state) {
      state.renderFollow = !state.renderFollow
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.currentUser()

        const { id, name, account, email, avatar, role } = data

        commit('setCurrentUser', {
          id,
          name,
          account,
          email,
          avatar,
          role
        })

        return true
      } catch (error) {
        console.log(error)
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {}
})
