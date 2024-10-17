<script lang="ts" setup>
import { routes } from '~/utils/constants/route';
</script>
<template>
  <nav class="nav">
    <ul>
      <li v-for="route in routes" :key="route.name">
        <NuxtLink :to="route.to">
          {{ $t(route.name) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="sass" scoped></style>
