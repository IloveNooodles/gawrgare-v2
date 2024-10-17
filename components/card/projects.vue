<script setup lang="ts">
import type { GetRepositoryResponse } from '~/utils/github';

interface Props {
  project: GetRepositoryResponse;
}

const props = defineProps<Props>();
</script>

<template>
  <NuxtLink :to="project.svn_url" target="_blank">
    <div class="container">
      <p class="cardTitle">{{ props.project.name }}</p>
      <p class="desc">
        {{ props.project.description }}
      </p>
      <div class="year flex">
        <Icon name="material-symbols:kid-star-outline" size="16" />
        <p>
          {{ props.project.stargazers_count }}
        </p>
      </div>
      <div class="tagContainer">
        <Tag v-for="t in props.project.topics" :text="t" />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
@import url('~/assets/scss/card/index.scss');
</style>
