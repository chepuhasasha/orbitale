<template lang='pug'>
  .schema-item(:title='graph.name')
    .schema-item_head(
      @click='setTask(graph)'
      :class='{ [$style.selected]: selected === graph || isSelected}')
      .schema-item_title
        font-awesome-icon(v-if='graph.icon' :icon='graph.icon')
        .schema-item_name {{ graph.name }} 
        Button(icon='trash-alt' @click='remove' :danger='true')
      .schema-item_desc {{ graph.description }}
      .ROW
        Button(icon='skull-crossbones' @click='' :danger='true')
        Button(icon='exclamation' @click='' :warning='true')
        Button(icon='check-circle' @click='' :sucsess='true')
        Button(icon='pen' @click='')
    .schema-item_line
      .ROW
        Button(
          v-if='graph.childs[0]'
          icon='eye'
          @click='minimize')
        Button(icon='plus' @click='add')
      Button(
        v-if='graph.childs[1]'
        icon='trash-alt'
        @click='' 
        :danger='true'
      )
    transition-group.schema-item_childs(
      name='slide-fade'
      tag='div'
    )
      SchemaItem(
        :isSelected='selected === graph'
        :graph='item'
        :key='i'
        v-for='(item, i) in graph.childs'
      )

</template>

<script>
import { mapActions, mapState } from 'vuex'
import { Graph } from '@/mixin'

export default {
  name: 'SchemaItem',
  components: {
    Button: () => import('@/components/Button.vue')
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
      title: 'Title',
      description: 'desctiption'
    }
  },
  mixins: [Graph],
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
      this.addGraph(this.graph, this.title, this.description)
    },
    remove() {
    },
    minimize() {
    }
  }
}
</script>

<style lang='scss'>
.schema-item {
  display: flex;
  gap: 5px;
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
</style>