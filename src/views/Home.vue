<template lang='pug'>
  .home
    Example(grid-area='1/1/5/5')
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Example: () => import('@/blocks/Example.vue'),
  },
  computed: {
    ...mapState({
      file: state => state.fileThree.file
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
