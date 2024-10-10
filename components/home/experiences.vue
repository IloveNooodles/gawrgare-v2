<script setup lang="ts">
import { experiences } from '~/utils/constants/experience';
</script>

<template>
  <article id="experiences">
    <Card v-for="exp in experiences" v-bind="exp" />
  </article>
</template>

<style scoped lang="scss"></style>
