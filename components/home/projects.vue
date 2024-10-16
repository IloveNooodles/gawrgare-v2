<script setup lang="ts">
const { status, data } = await useFetch("/api/github", {
  query: { per_page: 5 },
})

</script>
<template>
  <Suspense>
    <article id="projects">
      test
      {{ data }}
    </article>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style lang="scss" scoped></style>
