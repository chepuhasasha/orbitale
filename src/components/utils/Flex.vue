<template lang='pug'>
  component.flex(:style='getStyle' :is='tag')
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
    tag: {
      type: String,
      default: 'div'
    },
    gridArea: {
      type: String,
      default: '1/1/2/2'
    },
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
      type: String,
      default: '10px'
    },
    align: {
      type: String,
      default: 'left'
    },
    alignSelf: {
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
        padding: this.padding,
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
      result.alignSelf = this.alignSelf
      result.justifyContent = this.justify
      result.gridArea = this.gridArea
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