<script setup lang="ts">


</script>

<template>
  <section class="content">
    <HomeAbout />
    <HomeExperiences />
    <HomeProjects />
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
