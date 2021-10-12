<template lang='pug'>
  .grid(:style='getStyle')
    slot
</template>

<script>
export default {
  name: 'Grid',
  props: {
    cols: {
      type: Number,
      default: 5
    },
    rows: {
      type: Number,
      default: 5
    },
    gap: {
      type: Number,
      default: 10
    }
  },
  computed: {
    getStyle() {
      return {
        gridTemplateColumns: `repeat(${this.cols}, 1fr)`,
        gridTemplateRows: `repeat(${this.rows}, 1fr)`,
        gridGap: `${this.gap}px`
      }
    }
  }
}
</script>

<style lang='scss'>
.grid {
  display: grid;
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  padding: 20px;
  background: #f1f3f6;
}
</style>