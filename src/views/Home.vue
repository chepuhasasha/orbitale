<template lang='pug'>
  .home
    //- Graph(grid-area='1/1/11/2')
    GraphSchema(:grid-area='task ? "1/1/11/7":"1/1/11/9"')
    transition(name='slide-fade' tag='div')
      Details(v-if='task' grid-area='1/7/11/9')
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Details: () => import('@/blocks/Details.vue'),
    // Graph: () => import('@/blocks/Graph.vue'),
    GraphSchema: () => import('@/blocks/GraphSchema.vue'),
  },
  computed: {
    ...mapState({
      graph: state => state.graph,
      task: state => state.selected.task,
    })
  }
}
</script>

<style lang='scss'>
.home {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 1px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
