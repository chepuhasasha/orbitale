<template lang='pug'>
  .schema-item(:title='graph.name')
    .schema-item_head
      .schema-item_name {{ graph.name }}
      Button(icon='plus' @click='add')
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
      title: 'rrr',
      description: ''
    }
  },
  mixins: [Graph],
  methods: {
    add() {
      this.addGraph(this.graph, this.title, this.description)
    }
  }
}
</script>

<style lang='scss'>
.schema-item {
  display: flex;
  &_head {
    min-width: 150px;
    max-width: 150px;
    background: var(--background_0);
    padding: 10px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5px;
  }

  &_name {
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