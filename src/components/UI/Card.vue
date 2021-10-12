<template lang='pug'>
  Flex.card(col padding='20px' v-bind='$attrs')
    Flex.card_header(fillW padding='0')
      slot(name='header')
        h5 Header
    Flex.card_body(fillW col padding='0' tag='section')
      slot(name='body')
        p body
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