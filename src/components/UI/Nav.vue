<template lang='pug'>
  Flex.nav(fillW tag='nav' justify='space-between' align='center' padding='20px')
    img(:src='require("@/assets/logo.svg")')
    Flex(fillW justify='center')
      a Home
      a Docs
      a About
    Flex
      Button Sing Up
      Button(active) Sing In
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.nav {
}
</style>