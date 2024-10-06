<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark-theme',
  valueLight: 'light-theme',
});
const toggleDark = useToggle(isDark);
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
      <header>
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
        <button @click="toggleDark()">
          <i inline-block align-middle i="dark:carbon-moon carbon-sun" />

          <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
        </button>
      </header>
      <main>
        <slot />
      </main>
      <footer>
      </footer>
    </Body>

    </Html>
  </div>
</template>
