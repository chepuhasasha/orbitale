<template lang='pug'>
  Block(
    block-title='Details'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      .COL {{ selected }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Details',
  props: {
    gridArea: {
      type: String,
      default: null
    }
  },
  components: {
    Block: () => import('@/templates/Block.vue'),
  },
  computed: {
  ...mapState({
    selected: state => state.selected.task
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
