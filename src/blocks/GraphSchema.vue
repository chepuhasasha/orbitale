<template lang='pug'>
  Block(
    block-title='mindgraph.'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      .schema
        SchemaItem(:graph='getGraph')
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
    SchemaItem: () => import('@/components/SchemaItem.vue'),
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
      const root = [];
      let child;
    
      this.tasks.forEach((task,i) => {
        this.$set(task, 'childs', [])
        taskIdsByIndex[task.id] = i
      })

      this.tasks.forEach(task => {
        child = task
        if (child.parent_node !== null) {
          this.tasks[taskIdsByIndex[task.parent_node]].childs.push(child);
        } else {
          root.push(child);
        }
      })
      return root[0];
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
