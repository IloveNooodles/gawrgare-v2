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

<style scoped lang="scss"></style>
