<script setup lang="ts">
import { GITHUB_PROJECTS } from '~/utils/constants/projects';
const projectData = GITHUB_PROJECTS;

</script>
<template>
  <section id="projects">
    <CardProjects v-for="project in projectData" :project="project" :key="project.id" />
  </section>
</template>

<style lang="scss" scoped>
.margin {
  margin: 1rem 0;
}
</style>
