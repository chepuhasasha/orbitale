<template lang='pug'>
  Flex.card(col :padding='20')
    Flex.card_header(fillW)
      slot(name='header')
        span Header
    Flex.card_header(fillW col)
      slot(name='body')
        span body
        span body
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.card {
  background: #f1f3f6;
  border-radius: 20px;
}
</style>