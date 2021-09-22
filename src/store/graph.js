export default {
  namespaced: true,

  state: {
    name: '#1',
    id: 1,
    description: 'MAIN',
    childs: []
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
