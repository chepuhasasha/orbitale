<template lang='pug'>
  Card(
    :card-title='project.name'
    cursor='pointer'
    :selected='isSelected'
    @click='select(project)'
  )
    template(v-slot:tools)
      .ROW
        Button(icon='pen')
        Button(icon='trash-alt' :danger='true')
    template(v-slot:body)
      .COL
        .description.subtext {{ project.description }}
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProjectCard',

  components: {
    Card: () => import('@/templates/Card.vue'),
    Button: () => import('@/components/Button.vue'),
  },

  props: {
    project: {
      type: Object,
      require: true
    }
  },

  computed: {
    ...mapState({
      selected: state => state.projects.active
    }),

    isSelected() {
      return this.selected === this.project
    }
  },
  methods: {
    ...mapActions({
      select: 'projects/setActiveProject',
    }),
  }
}
</script>

<style lang='scss' scoped>
.description {
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>