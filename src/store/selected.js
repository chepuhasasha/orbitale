export default {
  namespaced: true,

  state: {
    graph: null
  },

  mutations: {
    SET_GRAPH(state, value) {
      state.graph = value;
    },
  },

  actions: {
    setGraph({ commit }, value) {
      commit("SET_GRAPH", value);
    },
  }
};
