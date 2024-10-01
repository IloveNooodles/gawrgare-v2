<script setup lang="ts">

</script>

<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.name">
        <NuxtLink :to="route.to">
          {{ route.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
  <div>
    <details>
      <strong>
        Muhammad Garebaldhie ER Rahman
      </strong>
    </details>
    <p>
      Hello, I'm Gare, a Software Engineer and Cybersecurity enthusiast
    </p>
    <p>
      Currently working in Matchmade as an software engineer intern. Previously was working as an intern in Sayurbox,
      Garena, makmur.id, and Stealth Startup.
    </p>
    <p>
      I also enjoy doing CTF for fun. My favorite is binary and web exploitation.
    </p>
    <p>
      I love to play games especially pokemon and monster hunter, listening to music, and watching movies. By far, my
      favorite movies is Interstellar and Steins;Gate
    </p>
  </div>
</template>

<style lang="scss"></style>
