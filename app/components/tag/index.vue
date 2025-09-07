<script setup lang="ts">
import type { Tag } from '~/types/tag';
const props = defineProps<Tag>()
</script>
<template>
  <div class="tag">
    {{ props.text }}
  </div>
</template>

<style lang="scss" scoped>
@import url("~/assets/scss/tag/index.scss");
</style>
