<script setup lang="ts">
import { type Experience } from '~/utils/constants/experience';

const exp = defineProps<Experience>();
</script>

<template>
  <NuxtLink :to="exp.url" target="_blank">
    <div class="container">
      <p class="cardTitle">
        {{ exp.title }} — {{ exp.name }}
        <span> <Icon name="material-symbols:arrow-outward" /> </span>
      </p>
      <p class="year">{{ exp.year_start }} — {{ exp.year_end }}</p>
      <p class="desc">
        {{ exp.description }}
      </p>
      <div class="tagContainer">
        <Tag v-for="t in exp.tag" :key="t" :text="t" />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
@import url('~/assets/scss/card/index.scss');
</style>
