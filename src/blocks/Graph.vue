<template lang='pug'>
  Block(
    block-title='mindgraph.'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      .schema
        TaskGraph(:graph='getGraph')
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GraphSchema',
  props: {
    gridArea: {
      type: String,
      default: null
    }
  },
  components: {
    Block: () => import('@/templates/Block.vue'),
    TaskGraph: () => import('@/components/TaskGraph.vue'),
  },
  data: () => {
    return {
      graph: {}
    }
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.tasks,
    }),
    getGraph(){
      const taskIdsByIndex = {};
      const graph = JSON.parse(JSON.stringify(this.tasks));
      let root = {};
      let child;
      /* eslint-disable */
      graph.forEach((task,i) => {
        task.childs = []
        taskIdsByIndex[task.id] = i
      })
      /* eslint-enable */
      graph.forEach(task => {
        child = task
        if (child.parent_node !== null) {
          graph[taskIdsByIndex[task.parent_node]].childs.push(child);
        } else {
          root = child
        }
      })

      return root;
    }
  },

}
</script>

<style lang='scss'>
.schema {
  width: max-content;
  height: max-content;
  margin: auto;
}
</style>
