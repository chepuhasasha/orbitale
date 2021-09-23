<template lang='pug'>
  .task
    Card(
      :card-title='graph.name'
      cursor='pointer'
    )
      template(v-slot:header) 
        .ROW.title
          .text {{ graph.name }}
      template(v-slot:tools)
        .ROW
          Button(icon='trash-alt' :danger='true')
      template(v-slot:body)
        .COL
          .description.subtext {{ graph.description }}
          .ROW
            Button(icon='skull-crossbones' @click='' :danger='true')
            Button(icon='exclamation' @click='' :warning='true')
            Button(icon='check-circle' @click='' :sucsess='true')
            Button(icon='pen' @click='')
    .task_line
      .ROW
        Button(
          v-if='graph.childs[0]'
          icon='eye'
        )
        Button(icon='plus' @click='add')
      Button(
        v-if='graph.childs[1]'
        icon='trash-alt'
        :danger='true'
      )
    .task_childs
      TaskGraph(
        v-for='(child, i) in graph.childs'
        :key='i'
        :graph='child'
      )
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TaskGraph',
  components: {
    Button: () => import('@/components/Button.vue'),
    Card: () => import('@/templates/Card.vue'),
  },
  props: {
    graph: {
      type: Object,
      require: true
    },
    
    isSelected: {
      type: Boolean,
      require: true
    },

  },
  data: () => {
    return {
      task: {
        name: 'Task 1',
        description: 'test task',
      }
    }
  },
  computed: {
    ...mapState({
      selected: state => state.selected.task
    })
  },
  methods: {
    ...mapActions({
      setTask: 'selected/setTask'
    }),
    add() {
      const d = new Date().getMilliseconds()
      const task = {
        id: d,
        name: this.task.name,
        parent_node: this.graph.id,
        project: this.graph.project,
        type: 'feature',
        executors: ['user#1'],
        owner: 'user#1',
        position: {x: 100, y: 100},
        born: new Date().now(),
        daedline: '',
        status: 'default',
        description: this.task.description,
      }
      this.graph.childs.push(task)
    },
  }
}
</script>

<style lang='scss'>
.task {
  display: flex;
  gap: 5px;
  // align-items: center;
  &_line {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    border-radius: 6px;
    padding: 10px;
    color: var(--text_secondary);
    background: var(--background_0);
    writing-mode: vertical-lr;
  }
  &_head {
    min-width: 146px;
    max-width: 146px;
    min-height: 106px;
    max-height: 106px;
    background: var(--background_0);
    padding: 10px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &_title {
    justify-content: space-between;
    display: flex;
    gap: 10px;
    width: 100%;
    align-items: center;
  }
  &_desc {
    font-size: 12px;
    color: var(--text_secondary);
    max-width: 100%;
    max-height: 100%;
    overflow-y: hidden;
    text-overflow: ellipsis;
  }

  &_name {
    color: var(--text_primary);
    font-weight: 300;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &_childs {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
<style lang="scss" module>
.selected {
  box-shadow: 0px 0px 0px 1px var(--primary_0);
}
.selected_all {
  border-radius: 6px;
  border: 1px dashed rgba(11, 143, 232, 0.2);
  padding: 10px;
}
</style>