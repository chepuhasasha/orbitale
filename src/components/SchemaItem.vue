<template lang='pug'>
  .schema-item(:title='graph.name')
    .schema-item_head
      .schema-item_title
        Button(icon='check-circle' @click='remove' :sucsess='true')
        .schema-item_name {{ graph.name }}
        Button(icon='trash-alt' @click='remove' :danger='true')
      .schema-item_desc {{ graph.description }}
    .schema-item_line
      .ROW
        Button(icon='minus-circle' @click='minimize')
        Button(icon='plus' @click='add')
      Button(
        v-if='graph.childs[0]'
        icon='trash-alt'
        @click='removeAll' 
        :danger='true'
      )
    .schema-item_childs
      SchemaItem(
        :graph='item'
        v-for='(item, i) in graph.childs'
      )
</template>

<script>
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
    }
  },
  data: () => {
    return {
      title: 'Title',
      description: 'desctiption'
    }
  },
  mixins: [Graph],
  methods: {
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
    min-width: 150px;
    max-width: 150px;
    min-height: 120px;
    max-height: 120px;
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
    overflow-y: auto;
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