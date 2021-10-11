const config = {
  objects: [
    {
      id: 1,
      name: 'node',
      default: {
        name: 'node',
        cpu: '0%',
        ram: '0%',
        status: {
          color: 'red',
          ranking: 0
        }
      }
    }
  ],

  settings: {
    color_map: {
      '#ff0000': 0,
      '#00ffff': 100,
      '#00ff00': 200
    },
  },

  templates: [
    {
      id: 1,
      name: 'node',
      inherited: 'Element',
      slots: [
        {
          type: 'metrica',
          name: 'name',
          key: 'node.name',
          default: 'Name'
        },
        {
          type: 'widget',
          id: 1,
          name: 'name',
          key: 'node.cpu',
        },
      ]
    },

    {
      id: 2,
      name: 'container',
      inherited: 'Container',
      slots: [
        {
          type: 'metrica',
          name: 'Title',
          key: 'object.title',
          default: 'Container'
        },
        {
          type: 'container',
          name: 'body',
          childs: []
        },
      ]
    }
  ],


  dashbords: [
    {
      id: 1,
      name: 'Test1',
      description: '',
      blocks: [
        {
          id: 1,
          template: 'container',
          properties: {},

        }
      ]
    }
  ]
}
export default { config }