<template lang='pug'>
  Flex.card(col padding='20px' v-bind='$attrs')
    Flex.card_header(fillW padding='0')
      h5
        slot(name='header') Header
    Flex.card_body(fillW fillH col padding='0' tag='section')
      slot(name='body')
        p body
    Flex.card_footer(padding='0' fillW justify='end')
      slot(name='footer')
        p footer
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.card {
  background: white;
  border-radius: 20px;
}
</style>