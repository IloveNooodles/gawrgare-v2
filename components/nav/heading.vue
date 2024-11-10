<script lang="ts" setup></script>
<template>
  <div class="headingContainer">
    <h1 class="title">Muhammad Garebaldhie ER Rahman</h1>
    <h2 class="subtitle">
      {{ $t('engineer') }}
    </h2>
    <p class="special">
      <NuxtLink to="/blog">
        {{ $t('seeblog') }}
      </NuxtLink>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import url("~/assets/scss/nav/heading.scss");
</style>
