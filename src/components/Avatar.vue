<template lang='pug'>
  canvas.avatar(ref='avatar' :style='getStyle' :width='width' :height='width')
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    width: {
      type: Number,
      default: 40
    },

    pattern: {
      type: String,
      default: `00000000#01000010#00100100#01111110#01011010#00100100#01000010#00000000`
    }
  },
  data: () => {
    return {
      ctx: null
    }
  },
  computed: {
    getStyle() {
      return {
        maxWidth: `${this.width}px`,
        maxHeight: `${this.width}px`,
        minWidth: `${this.width}px`,
        minHeight: `${this.width}px`
      }
    }
  },
  methods: {
    parse() {
      const result = []
      const rows = this.pattern.split('#')
      rows.forEach(row => {
        result.push(row.split(''))
      })
      return result
    },

    draw(pattern) {
      const size = this.width / 8
      pattern.forEach((row, j) => {
        row.forEach((item, i) => {
          this.ctx.save()
          this.ctx.fillStyle = item === '1' ? 'black' : 'white'
          this.ctx.fillRect(i * size, j * size , size, size)
          this.ctx.fill()
          this.ctx.restore()
        })
      })
    }
  },

  watch: {
    pattern() {
      this.draw(this.parse())
    }
  },

  mounted() {
    this.ctx = this.$refs.avatar.getContext('2d')
    this.draw(this.parse())
  }
}
</script>

<style lang='scss'>
.avatar {
  border-radius: 20px;
  overflow: hidden;
}
</style>