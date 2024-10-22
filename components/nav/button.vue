<script lang="ts" setup>
import '~/assets/scss/layouts/default.scss';
import { navIcons } from '~/utils/constants/nav';

</script>
<template>
  <div class="navButton">
    <ul>
      <li v-for="navIcon in navIcons" :key="navIcon.name">
        <NuxtLink :to="navIcon.url" target="_blank">
          <Icon :name="navIcon.icon" />
        </NuxtLink>
      </li>
      <li class="hidden">
        <ThemeButton />
      </li>
    </ul>
    <Lang class="hidden" />
  </div>
</template>
