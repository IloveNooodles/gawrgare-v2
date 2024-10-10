<script setup lang="ts">
import { awards } from '~/utils/constants/awards';
</script>

<template>
  <article id="awards">
    <li v-for="award in awards">
      <p>
        {{ award.name }}
      </p>
    </li>
  </article>
</template>
