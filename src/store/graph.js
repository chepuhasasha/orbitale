export default {
  namespaced: true,

  state: {
    name: '#1',
    id: 1,
    icon: 'book-dead',
    status: '',
    description: 'MAIN dslfkepokfo pokewpok pkpekwpok pokwepfok poekwe erg eg ew ewg wwe ew wgee wg ewg weg weg ewgheafpfokwepo pokwepfk pokwep pokewf',
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
