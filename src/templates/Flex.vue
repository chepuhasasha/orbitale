<template lang='pug'>
  .flex(:style='getStyle')
    slot(name='content')
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
    aligment: {
      type: String,
      default: 'LT'
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
      if(this.col){
        switch (this.aligment) {
          case 'LT':
            result.alignItems = 'flex-start'
            result.justifyContent = 'left'
            break;
        
          default:
            break;
        }
      }
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
}
</style>