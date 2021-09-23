<template lang='pug'>
  Block(
    block-title='Projects'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      transition-group.COL(tag='div' name='slide-fade') 
        ProjectCard(
          v-for='project in projects'
          :key='project.id',
          :project='project')
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Projects',
  props: {
    gridArea: {
      type: String,
      default: null
    }
  },
  components: {
    Block: () => import('@/templates/Block.vue'),
    ProjectCard: () => import('@/components/ProjectCard.vue')
  },
  computed: {
  ...mapState({
    projects: state => state.projects.projects,
    selected: state => state.projects.active
  }),
  methods: {
    ...mapActions({
      addProject: 'projects/addProject'
    })
  }
}
}
</script>

<style lang='scss'>
</style>
