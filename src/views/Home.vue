<template lang='pug'>
  Flex(col)
    Card
    Button(icon='eye') Button
</template>

<script>
export default {
  name: 'Home',
  components: {
    Card: () => import('@/components/UI/Card.vue'),
    Button: () => import('@/components/UI/Button.vue'),
  }
}
</script>

<style lang='scss'>

</style>
