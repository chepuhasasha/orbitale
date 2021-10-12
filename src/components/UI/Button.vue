<template lang="pug">
  Flex.button(
    padding='10px 14px'
    tag='button'
    :class='getClasses'
    align='center'
    v-bind='$attrs'
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
      default: false,
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
  background:white;
  color: rgb(48, 48, 48);
  border-radius: 6px;
  &:hover {
    background: #f1f3f6;
  }
}
</style>

<style lang="scss" module>
.active {
  background:rgb(0, 174, 255);
  color: white;
  &:hover {
    background:rgb(63, 194, 255);
  }
}
.disable {
}
</style>