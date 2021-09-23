<template lang='pug'>
  .card.COL(:style='{cursor}' :class='getClasses' @click='$emit("click")')
    .card_header.text.ROW
      slot(name='header')
        .card_header_title {{ cardTitle }}
      slot(name='tools')
    .card_body.COL
      slot(name='body')
</template>

<script>
export default {
  name: 'Block',
  props: {
    cardTitle: {
      type: String,
      default: null
    },

    cursor: {
      type: String,
      default: 'default'
    },

    selected: {
      type: Boolean,
      default: false
    },

    width: {
      type: String,
      default: 'max-content'
    },

    height: {
      type: String,
      default: 'max-content'
    },
  },

  computed: {
    getClasses() {
      return {
        [this.$style.selected]: this.selected
      }
    }
  }
}
</script>

<style lang='scss'>
.card {
  transition: all ease-out .3s;
  background: var(--background_0);
  border:1px solid var(--background_0);
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: var(--text_0);
  &_header {
    justify-content: space-between;
    &_title {
      width: 100%;
    }
  }

  &_body {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  &:hover {
    background: var(--background_100);
    border-color: var(--background_0);
  }
}
</style>

<style lang="scss" module>
.selected {
  border-color: var(--primary_0) !important;
}
</style>
