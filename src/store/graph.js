export default {
  namespaced: true,

  state: {
  },

  mutations: {
    SET_GRAPH(value) {
      this.state = value;
    },
  },

  actions: {
    setGraph({ commit }, value) {
      commit("SET_GRAPH", value);
    },
  }
};
