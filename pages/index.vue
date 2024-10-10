<script setup lang="ts">
import { awards } from '~/utils/constants/awards';
import { experiences } from '~/utils/constants/experience';


</script>

<template>
  <section class="content">
    <article id="about">
      <p>
        I specialize in building robust backend systems, managing infrastructure, and handling deployments through
        Kubernetes. Although my main focus is on backend development, I’m also comfortable with frontend work. I
        have integrated new payment systems at a
        <span>
          <NuxtLink to="https://www.makmur.id" target="_blank">Fintech Company</NuxtLink>
        </span>
        built frontend solutions for an
        <span>
          <NuxtLink to="https://www.sayurbox.com" target="_blank">Ecommerce Company</NuxtLink>
        </span>
        developed highly scalable backend systems at a
        <span>
          <NuxtLink to="https://garena.com" target="_blank">Mobile Game Company</NuxtLink>
        </span>, and lastly doing some kubernetes stuff on
        and worked with Backend, Frontend, and Kubernetes
        on
        <span>
          <NuxtLink to="https://www.matchmade.io" target="_blank">Data Reconciliation Company</NuxtLink>
        </span>
      </p>
      <p>
        In my free time, I enjoy participating in CTF challenges to deepen my knowledge in cybersecurity, web
        development, and new tech trends. I also love playing games like Pokémon and Monster Hunter, as well as watching
        movies. My favorite films include are Monogatari and Steins;Gate.
      </p>
    </article>
    <article id="experiences">
      <li v-for="exp in experiences">
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

.title {
  font-family: 'Paytone One';
}

article {
  p {
    font-size: 14px;
    margin-bottom: 1rem;
  }
}
</style>
