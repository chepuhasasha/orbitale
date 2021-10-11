<template lang="pug">
  .ROW_C.HUG_WIDTH.HUG_HEIGHT(
    :class='getClasses'
  ) {{ text }}
    //- font-awesome-icon(v-if='icon' :icon='icon')
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    fill: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getClasses() {
      return {
        [this.$style.fill]: this.fill, 
        [this.$style.default]: true, 
      }
    }
  }
}
</script>
<style lang="scss" module>
.fill {
  background: #1784FE !important;
  color: white !important;
  &:hover {
    background: #53a3ff !important;
  }
}

.default {
  transition: all ease .3s;
  background: white;
  cursor: pointer;
  padding: 10px 13px;
  font-size: 12px;
  font-family: Montserrat;
  color: #4A4A4A;
  border-radius: 6px;
  &:hover {
    background: #f1f3f6;
  }
}
</style>
