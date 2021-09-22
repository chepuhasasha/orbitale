<template lang='pug'>
  Block(
    block-title='Graph'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      GraphItem(:graph='graph')
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Graph',
  props: {
    gridArea: {
      type: String,
      default: null
    }
  },
  components: {
    Block: () => import('@/templates/Block.vue'),
    GraphItem: () => import('@/components/GraphItem.vue'),
  },
  computed: {
  ...mapState({
    graph: state => state.graph
  })
}
}
</script>

<style lang='scss'>
</style>
