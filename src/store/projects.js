export default {
  namespaced: true,

  state: {
    projects: [
      {   
        id: 1,
        name: 'Project #1',
        description: 'test project #1',
        owner: 'user#1',
        team: ['user#1', 'user#2'],
      },
      {   
        id: 2,
        name: 'Project #2',
        description: 'test project #2',
        owner: 'user#1',
        team: ['user#1', 'user#2'],
      }
    ],
    active: null
  },


  mutations: {
    SET_PROJECTS(state, value) {
      state.projects = value;
    },
    SET_ACTIVE_PROJECT(state, value) {
      state.active = value;
    },
    ADD_PROJECTS(state, value) {
      state.projects.push(value);
    },
  },

  actions: {
    setProjects({ commit }, value) {
      commit("SET_PROJECTS", value);
    },
    setActiveProject({ commit }, value) {
      commit("SET_ACTIVE_PROJECT", value);
    },
    addProject({ commit }, value) {
      commit("ADD_PROJECT", value);
    },
  }
};
