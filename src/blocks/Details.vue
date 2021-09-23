<template lang='pug'>
  Block(
    block-title='Details'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      .COL(v-if='selectedTask')
        input(v-model='selectedTask.name')
        textarea(v-model='selectedTask.description')
      pre {{ selectedTask }}
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
    selectedTask: state => state.selected.task,
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
