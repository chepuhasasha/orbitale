<template lang='pug'>
  Grid(:cols='9' :rows='6')
    Card(fillW fillH gridArea='1/1/3/3')
      template(v-slot:header) Colors
      template(v-slot:body) 
        pre test
      template(v-slot:footer) 
        Button(icon='plus') Add
        Button(active) Save
</template>

<script>
export default {
  name: 'Settings',
}
</script>

<style lang='scss'>
</style>
