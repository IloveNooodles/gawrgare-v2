<script setup lang="ts">
import type { Res } from '~/types/response';

const { status, data } = await useFetch<Res<Array<any>>>('/api/github', {
  query: { per_page: 5 },
  lazy: true,
});

const projectData = data.value?.data;
</script>
<template>
  <Suspense>
    <section id="projects" v-if="status == 'success'">
      <CardProjects v-for="project in projectData" :project="project" :key="project.id" />
    </section>
    <div v-else-if="status == 'error'">
      <p class="margin">Cannot load projects</p>
    </div>
    <template #fallback>
      <CardSkeleton />
    </template>
  </Suspense>
</template>

<style lang="scss" scoped>
.margin {
  margin: 1rem 0;
}
</style>
