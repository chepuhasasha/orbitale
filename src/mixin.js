/* eslint-disable */
const Graph = {
  methods: {
    addGraph(parent, title, description) {
      parent.childs.push({
        id: Math.round(Math.random(new Date().getTime()) * 1000000),
        name: title,
        icon: 'skull-crossbones',
        description,
        status: '',
        childs: []
      });
    }
  }
};

export { Graph }