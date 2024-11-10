<template lang="html">
  <NuxtLink to="/blog" class="hover-none">
    <div class="special-container">
      <p class="special">
        {{ $t('seeblog') }}
      </p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@import url("~/assets/scss/nav/blog.scss");
</style>
