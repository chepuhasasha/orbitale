<template lang='pug'>
  .card.COL
    h3 ADD API OBJECT
    Button(text='Sing Up')
</template>

<script>
export default {
  name: 'Card',
  components: {
    Button: () => import('@/components/UI/Button.vue')
  }
}
</script>

<style lang='scss'>
.card {
  background: white;
  padding: 20px;
  border-radius: 20px;
}
</style>