<template lang='pug'>
  Flex(col)
    Card(:w='300')
      template(v-slot:body)
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Button(icon='check-circle' alignSelf='end') Button
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
