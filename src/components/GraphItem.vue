<template lang='pug'>
  .graph-item
    .graph-item_head
      .graph-item_name {{ graph.name }}
      Button(icon='plus' @click='add')
    .graph-item_childs
      GraphItem(
        :graph='item'
        v-for='(item, i) in graph.childs'
      )
</template>

<script>
import { Graph } from '@/mixin'

export default {
  name: 'GraphItem',
  components: {
    Button: () => import('@/components/Button.vue')
  },
  props: {
    graph: {
      type: Object,
      require: true
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
.graph-item {
  &_head {
    background: var(--background_0);
    padding: 10px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  &_name {
    font-weight: 300;
  }

  &_childs {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 30px;
  }
}
</style>