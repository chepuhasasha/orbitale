<template lang='pug'>
  Grid(:cols='3' :rows='3')
    Card(fillW fillH gridArea='2/2/3/3')
      template(v-slot:body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Button(icon='check-circle' alignSelf='end') Button
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang='scss'>
</style>
