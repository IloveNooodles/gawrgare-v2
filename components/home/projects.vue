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
    <article id="projects" v-if="status == 'success'">
      <CardProjects
        v-for="project in projectData"
        :project="project"
        :key="project.id"
      />
    </article>
    <div v-else-if="status == 'error'">error</div>
    <template #fallback>
      <CardSkeleton />
    </template>
  </Suspense>
</template>

<style lang="scss" scoped></style>
