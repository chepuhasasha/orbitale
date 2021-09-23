export default {
  namespaced: true,

  state: {
    graph: null,
    task: null
  },

  mutations: {
    SET_GRAPH(state, value) {
      state.graph = value;
    },
    SET_TASK(state, value) {
      console.log(value)
      state.task = value;
    },
  },

  actions: {
    setGraph({ commit }, value) {
      commit("SET_GRAPH", value);
    },
    setTask({ commit }, value) {
      commit("SET_TASK", value);
    },
  }
};
