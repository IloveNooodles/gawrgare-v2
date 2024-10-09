<script setup lang="ts">
</script>

<template>
  <section class="content">
    <!-- <div> -->
    <!--   <div> -->
    <!--     <p>{{ $t('welcome') }}</p> -->
    <!--     <p>Date: {{ $d(new Date(), 'short') }}</p> -->
    <!--     <p>Curr: {{ $n(1000, 'currency') }}</p> -->
    <!--   </div> -->
    <!-- </div> -->
    <article id="about">
      <p>
        I specialize in building robust backend systems, infrastructure, and managing deployments through Kubernetes.
        While my focus is on the backend, I'm also comfortable with frontend development. I love doing CTF challenges to
        expand my knowledge not only in cybersecurity but also in web
        development and new tech trends.
      </p>
      <p>
        While outisde of computer, i usually loves to play games and wathing movies. Pokemon and monster hunter by far
        are my favorite ones, listening to music, and watching movies. By far, my
        favorite movies is Interstellar and Steins;Gate
      </p>
    </article>
    <article id="experiences">
      <li v-for="exp in experience">
        <p>
          {{ exp.name }}
        </p>
      </li>
    </article>
    <article id="projects">
    </article>
    <article id="awards">
      <li v-for="award in awards">
        <p>
          {{ award.name }}
        </p>
      </li>
    </article>
  </section>
</template>

<style lang="css" scoped>
.title {
  font-family: 'Paytone One';
}
</style>
