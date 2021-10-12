<template lang="pug">
  Flex.button(padding='6px 14px' tag='button')
    slot button
    font-awesome-icon(v-if='icon' :icon='icon')
</template>
<script>
export default {
  name: 'Button',
  props: {
    icon: {
      type: String,
      default: null
    },

    active: {
      type: Boolean,
      default: false,
    },

    disable: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
  }
}
</script>
<style lang="scss">
.button {
}
</style>

<style lang="scss" module>
.active {
}
.disable {
}
</style>