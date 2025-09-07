<script setup lang="ts"></script>

<template>
  <section class="content">
    <h5 class="capitalize">{{ $t('about') }}</h5>
    <HomeAbout />
    <h5 class="capitalize">{{ $t('experiences') }}</h5>
    <HomeExperiences />
    <h5 class="capitalize">{{ $t('projects') }}</h5>
    <HomeProjects />
    <h5 class="capitalize">{{ $t('awards') }}</h5>
    <HomeAwards />
  </section>
</template>

<style lang="css" scoped>
.content {
  max-width: 85%;
  margin: 0 auto;
}
</style>
