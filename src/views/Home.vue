<template lang='pug'>
  .grid
    .COL.FILL_HEIGHT(:style='{gridArea: "7/4/8/8"}')
      h1 orbitale.
      h5 monitoring face
      section Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .ROW_R
        Button(text='GitHub' :fill='false')
        Button(text='Try now!')
</template>

<script>
export default {
  name: 'Home',
  components: {
    Button: () => import('@/components/UI/Button.vue')
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
