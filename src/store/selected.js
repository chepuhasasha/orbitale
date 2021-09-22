export default {
  namespaced: true,

  state: {
    task: null
  },

  mutations: {
    SET_TASK(state, value) {
      state.task = value;
    },
  },

  actions: {
    setTask({ commit }, value) {
      commit("SET_TASK", value);
    },
  }
};
