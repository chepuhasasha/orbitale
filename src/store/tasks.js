export default {
  namespaced: true,

  state: {
    tasks: [
      {
        id: 1,
        name: 'Task 1',
        parent_node: null,
        project: 1,
        type: 'bug',
        executors: ['user#1'],
        owner: 'user#1',
        position: {x: 100, y: 100},
        born: '',
        daedline: '',
        status: 'default',
        description: 'test task',
      },
      {
        id: 2,
        name: 'Task 2',
        parent_node: 1,
        project: 1,
        type: 'bug',
        executors: ['user#1'],
        owner: 'user#1',
        position: {x: 100, y: 100},
        born: '',
        daedline: '',
        status: 'default',
        description: 'test task',
      },
      {
        id: 3,
        name: 'Task 3',
        parent_node: 2,
        project: 1,
        type: 'bug',
        executors: ['user#1'],
        owner: 'user#1',
        position: {x: 100, y: 100},
        born: '',
        daedline: '',
        status: 'default',
        description: 'test task',
      },
      {
        id: 4,
        name: 'Task 4',
        parent_node: 2,
        project: 1,
        type: 'bug',
        executors: ['user#1'],
        owner: 'user#1',
        position: {x: 100, y: 100},
        born: '',
        daedline: '',
        status: 'default',
        description: 'test task',
      },
    ],
    active: null
  },

  mutations: {
    SET_TASKS(state, value) {
      state.tasks = value;
    },
    SET_ACTIVE_TASK(state, value) {
      state.active = value;
    },
    ADD_TASK(state, value) {
      state.tasks.push(value);
    },
  },

  actions: {
    setProject({ commit }, value) {
      commit("SET_PROJECT", value);
    },
    setActiveTask({ commit }, value) {
      commit("SET_ACTIVE_TASK", value);
    },
    addTask({ commit }, value) {
      commit("ADD_TASK", value);
    },
  }
};
