<script setup lang="ts">
import { experiences } from '~/utils/constants/experience';
</script>

<template>
  <section id="experiences">
    <Card v-for="exp in experiences" v-bind="exp" />
  </section>
</template>

<style scoped lang="scss"></style>
