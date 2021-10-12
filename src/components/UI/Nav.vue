<template lang='pug'>
  Flex.nav(fillW tag='nav' justify='space-between' align='center' padding='20px')
    img(:src='require("@/assets/logo.svg")')
    Flex(fillW justify='center')
      router-link(to='/' active-class='active' exact) Home
      router-link(to='/settings' active-class='active') Settings
      router-link(to='/about' active-class='active') About
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

<style lang='scss' scoped>
.active {
  font-weight: 700;
}
</style>