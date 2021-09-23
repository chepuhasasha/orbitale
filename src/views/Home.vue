<template lang='pug'>
  .home
    Projects(grid-area='1/1/11/2')
    Graph(grid-area="1/2/11/7")
    Details(grid-area="1/7/11/9")
</template>

<script>
export default {
  name: 'Home',
  components: {
    Graph: () => import('@/blocks/Graph.vue'),
    Projects: () => import('@/blocks/Projects.vue'),
    Details: () => import('@/blocks/Details.vue'),
  },
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
