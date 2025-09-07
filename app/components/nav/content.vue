<script lang="ts" setup>
import { routes } from '~/utils/constants/route';
</script>
<template>
  <nav class="nav">
    <div class="headerContainer">
      <ThemeButton />
      <Lang />
    </div>
    <ul>
      <li v-for="route in routes" :key="route.name" class="animation">
        <NuxtLink :to="route.to" class="capitalize animation">
          {{ $t(route.name) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
.headerContainer {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
}
</style>
