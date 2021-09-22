<template lang='pug'>
  Block(
    block-title='Example'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      span test
</template>

<script>
export default {
  name: 'Example',
  props: {
    gridArea: {
      type: String,
      default: null
    }
  },
  components: {
    Block: () => import('@/templates/Block.vue')
  }
}
</script>

<style lang='scss'>
</style>
