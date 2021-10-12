<template lang="pug">
  Flex.button(
    padding='10px 14px'
    tag='button'
    :class='getClasses'
    align='center'
    )
    slot
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
      default: true,
    },

    disable: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    getClasses() {
      return {
        [this.$style.active]: this.active,
        [this.$style.disable]: this.disable
      }
    }
  }
}
</script>
<style lang="scss">
.button {
  cursor: pointer;
  background:rgb(0, 174, 255);
  color: white;
  border-radius: 6px;
  &:hover {
    background:rgb(63, 194, 255);
  }
}
</style>

<style lang="scss" module>
.active {
}
.disable {
}
</style>