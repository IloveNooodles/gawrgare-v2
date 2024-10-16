<script setup lang="ts">


</script>

<template>
  <section class="content">
    <h5 class="hidden">About</h5>
    <HomeAbout />
    <h5 class="hidden">Experiences</h5>
    <HomeExperiences />
    <h5 class="hidden">Projects</h5>
    <HomeProjects />
    <h5 class="hidden">Awards</h5>
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
  max-width: 85vw;
  margin: 0 auto;
}
</style>
