<template lang='pug'>
  #app
    Nav
    router-view
</template>
<script>

export default {
  name: 'App',
  components: {
    Nav: () => import('@/components/UI/Nav.vue')
  }
}
</script>

<style lang="scss">
</style>
