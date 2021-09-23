import Vue from 'vue'
import Vuex from 'vuex'

import graph from '@/store/graph'
import selected from '@/store/selected'

import projects from '@/store/projects'
import tasks from '@/store/tasks'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light'
  },
  mutations: {
    SET_THEME(state, value) {
      state.theme = value
    }
  },
  actions: {
    setTheme({ commit }, value) {
      commit('SET_THEME', value)
    }
  },
  modules: {
    graph,
    selected,
    projects,
    tasks
  }
})
