<template lang='pug'>
  Flex.card(:col='true')
    span A
    span B
    Flex.card
      span A
      span B
        
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang='scss'>
.card {
  border: 1px solid black;
}
</style>
