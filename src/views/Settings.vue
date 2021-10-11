<template lang='pug'>
  .grid
    Card(:style='{gridArea: "1/1/7/5"}') test
</template>

<script>
export default {
  name: 'Home',
  components: {
    Card: () => import('@/templates/Card.vue')
  }
}
</script>

<style lang='scss'>

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
