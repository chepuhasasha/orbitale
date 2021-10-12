<template lang='pug'>
  .flex(:style='getStyle')
    slot
      .flex_plug
      .flex_plug
      .flex_plug
      .flex_plug
</template>

<script>
export default {
  name: 'Flex',
  props: {
    col: {
      type: Boolean,
      default: false
    },
    fillW: {
      type: Boolean,
      default: false
    },
    fillH: {
      type: Boolean,
      default: false
    },
    hugW: {
      type: Boolean,
      default: true
    },
    hugH: {
      type: Boolean,
      default: true
    },
    w: {
      type: Number,
      default: null
    },
    h: {
      type: Number,
      default: null
    },
    gap: {
      type: Number,
      default: 10
    },
    padding: {
      type: Number,
      default: 10
    },
    align: {
      type: String,
      default: 'left'
    },
    justify: {
      type: String,
      default: 'left'
    }
  },

  computed: {
    getStyle() {
      const result = {
        flexDirection: this.col ? 'column' : 'row',
        gap: `${this.gap}px`,
        padding: `${this.padding}px`,
      }
      if(this.hugW) {
        result.width = `max-content`
      }
      if(this.hugH) {
        result.height = `max-content`
      }
      if(this.fillW) {
        result.width = `100%`
      }
      if(this.fillH) {
        result.height = `100%`
      }
      if(this.w) {
        result.width = `${this.w}px`
      }
      if(this.h) {
        result.height = `${this.h}px`
      }
      result.alignItems = this.align
      result.justifyContent = this.justify
      return result
    }
  },

  mounted() {
    this.$emit('mounted')
  }
}
</script>

<style lang='scss'>
.flex {
  display: flex;
  position: relative;
  &_plug {
    width: 40px;
    min-width: 40px;
    max-width: 40px;
    height: 40px;
    min-height: 40px;
    max-height: 40px;
    background: #a0a0a0;
  }
}
</style>