<script setup lang="ts">
const isDark = useDark({
  writeDefaults: true,
  initialValue: 'dark',
  attribute: 'class',
  valueDark: 'dark-theme',
  valueLight: 'light-theme',
});
const toggleDark = useToggle(isDark);
</script>
<template lang="html">
  <div @click="toggleDark()">
    <Icon v-if="isDark" name="ri:sun-line" />
    <Icon v-else name="ri:moon-line" />
  </div>
</template>

<style lang="css" scoped>
div {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

div:hover {
  transform: scale(1.1);
}
</style>
