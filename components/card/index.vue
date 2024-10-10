<script setup lang="ts">
import { type Experience } from '~/utils/constants/experience';

const exp = defineProps<Experience>()

</script>

<template>
  <span>
    <NuxtLink :to="exp.url">
      {{ exp.title }}
    </NuxtLink>

  </span>
  <p>
    {{ exp.name }}
  </p>
  <p>
    {{ exp.year_start }} - {{ exp.year_end }}
  </p>
  <p>
    {{ exp.description }}
  </p>
  <p>{{ exp.tag[0] }}</p>
</template>

<style lang="scss" scoped></style>
