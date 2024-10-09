<script setup lang="ts">
import "~/assets/scss/layouts/default.scss";

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const isDark = useDark({
  writeDefaults: true,
  initialValue: 'dark',
  attribute: 'class',
  valueDark: 'dark-theme',
  valueLight: 'light-theme',
});
const toggleDark = useToggle(isDark);
const { locale, setLocale } = useI18n()

const changeLocale = (event: Event) => {
  const selectedLocale = (event.target as HTMLSelectElement).value;
  setLocale(selectedLocale)
}

</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
      <Title>mgarebaldhie.me</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>

    <Body id="app">
      <div class="headerContentContainer">
        <header class="header">
          <div class="headingContainer">
            <h1 class="title">
              Muhammad Garebaldhie ER Rahman
            </h1>
            <h2 class="subtitle">
              {{ $t('engineer') }}
            </h2>
          </div>
          <nav class="nav">
            <ul>
              <li v-for="route in routes" :key="route.name">
                <NuxtLink :to="route.to">
                  {{ route.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="navButton">
            <ul>
              <li v-for="navIcon in navIcons" :key="navIcon.name">
                <NuxtLink :to="navIcon.url" target="_blank">
                  <Icon :name="navIcon.icon" />
                </NuxtLink>
              </li>
              <li @click="toggleDark()">
                <Icon v-if="isDark" name="ri:sun-line" />
                <Icon v-else name="ri:moon-line" />
              </li>
            </ul>
            <select @change="changeLocale" name="language" id="lang" v-model="locale" class="custom-select">
              <option v-for="lang in languages" :value="lang.locale">
                {{ lang.name }}
              </option>
            </select>
          </div>
        </header>
        <main class="main">
          <slot />
        </main>
      </div>
      <footer>
      </footer>
    </Body>

    </Html>
  </div>
</template>

<style scoped lang="scss">
.custom-select {
  /* Basic styles */
  /* width: 200px; */
  padding: 10px;
  font-size: 16px;
  color: #333;
  /*background-color: themed('surface') */
  ;
  border: 2px solid #ccc;
  border-radius: 4px;
  /* Remove default appearance */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* Positioning for the arrow */
  background-image: url('data:image/svg+xml;charset=US-ASCII, %3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%275%27 viewBox=%270 0 10 5%27%3E%3Cpath fill=%27%23000%27 d=%27M0 0l5 5 5-5H0z%27/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px;
  cursor: pointer;
}

.custom-select:hover {
  border-color: #888;
}

.custom-select:focus {
  border-color: #3498db;
  outline: none;
}

/* Optional: Disable arrow for disabled options */
.custom-select option:disabled {
  color: #ccc;
}
</style>
