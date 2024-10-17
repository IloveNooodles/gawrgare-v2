<script setup lang="ts"></script>

<template>
  <section class="content">
    <h5 class="hidden capitalize">{{ $t('about') }}</h5>
    <HomeAbout />
    <h5 class="hidden capitalize">{{ $t('experiences') }}</h5>
    <HomeExperiences />
    <h5 class="hidden capitalize">{{ $t('projects') }}</h5>
    <LazyHomeProjects />
    <h5 class="hidden capitalize">{{ $t('awards') }}</h5>
    <HomeAwards />
  </section>
</template>

<!-- <div> -->
<!--   <div> -->
<!--     <p>{{ $t('welcome') }}</p> -->
<!--     <p>Date: {{ $d(new Date(), 'short') }}</p> -->
<!--     <p>Curr: {{ $n(1000, 'currency') }}</p> -->
<!--   </div> -->
<!-- </div> -->
<style lang="css" scoped>
.content {
  max-width: 85%;
  margin: 0 auto;
}
</style>
