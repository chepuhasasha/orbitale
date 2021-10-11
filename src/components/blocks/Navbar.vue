<template lang="pug">
  .ROW_C.nav
    img(:src='require("@/assets/logo.svg")')
    .ROW_C.FILL_WIDTH 
      span.nav_link about
      span.nav_link Docs
      span.nav_link Plans
    Button(text='Sing In' :fill='false')
    Button(text='Sing Up')
</template>
<script>
export default {
  name: 'Navbar',
  components: {
    Button: () => import('@/components/UI/Button.vue')
  }
}
</script>
<style lang="scss">
.nav {
  font-family: Montserrat;
  &_link {
    cursor: pointer;
    transition: all ease .3s;
    font-size: 12px;
    color: #4A4A4A;
    width: 50px;
    &:hover {
      font-weight: 700;
    }
  }
  padding: 10px 20px;
  background: white;
}
</style>