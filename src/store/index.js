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
      cover: '',
      introduction: '',
      role: ''
    },
    isAuthenticated: false,
    token: '',
    renderTweet: false,
    renderPopularUsers: false,
    renderFollow: false,
    renderProfile: false,
    renderUserTweets: false,
    renderUserAction: false
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
    },
    triggerProfileRender(state) {
      state.renderProfile = !state.renderProfile
    },
    triggerUserTweetsRender(state) {
      state.renderUserTweets = !state.renderUserTweets
    },
    triggerUserActionRender(state) {
      state.renderUserAction = !state.renderUserAction
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.currentUser()
        const { id, name, account, email, avatar, cover, introduction, role } =
          data

        commit('setCurrentUser', {
          id,
          name,
          account,
          email,
          avatar,
          cover,
          introduction,
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
