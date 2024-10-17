<script setup lang="ts">
import '~/assets/scss/layouts/default.scss';

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});
const isDark = useDark({
  writeDefaults: true,
  initialValue: 'dark',
  attribute: 'class',
  valueDark: 'dark-theme',
  valueLight: 'light-theme',
});
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>Muhammad Garebaldhie</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>

      <Body id="app">
        <div class="headerContentContainer">
          <header class="header">
            <NavHeading />
            <NavContent />
            <NavButton />
          </header>
          <main class="main">
            <slot />
          </main>
        </div>
        <footer></footer>
      </Body>
    </Html>
  </div>
</template>

<style scoped lang="scss"></style>
