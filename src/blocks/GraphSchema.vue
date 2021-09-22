<template lang='pug'>
  Block(
    block-title='GraphSchema'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      .schema
        SchemaItem(:graph='graph')
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
  computed: {
  ...mapState({
    graph: state => state.graph
  })
}
}
</script>

<style lang='scss'>
.schema {
  width: max-content;
  height: max-content;
  margin: auto;
}
</style>
