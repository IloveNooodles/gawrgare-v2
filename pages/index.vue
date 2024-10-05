<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>

<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.name">
        <NuxtLink :to="route.to">
          {{ route.name }}
        </NuxtLink>
      </li>
      <li>
        <Icon name="ri:github-line" />
      </li>
    </ul>
  </nav>
  <div>
    <div>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
  <div class="content">
    <h1 class="title">
      Muhammad Garebaldhie ER Rahman
    </h1>
    <h2>
      {{ $t('engineer') }}
    </h2>
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
      favorite movies is Interstellar and Steins;Gate <span><a>test</a></span>
    </p>
  </div>
</template>

<style lang="css" scoped>
.title {
  font-family: 'Paytone One';
}

.content {
  max-width: 85vw;
  margin: 0 auto;
}
</style>
