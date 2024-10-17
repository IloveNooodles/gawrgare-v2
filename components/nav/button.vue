<script lang="ts" setup>
import '~/assets/scss/layouts/default.scss';
import { languages } from '~/utils/constants/languages';
import { navIcons } from '~/utils/constants/nav';

const isDark = useDark({
  writeDefaults: true,
  initialValue: 'dark',
  attribute: 'class',
  valueDark: 'dark-theme',
  valueLight: 'light-theme',
});

const toggleDark = useToggle(isDark);
const { locale, setLocale } = useI18n();
const changeLocale = (event: Event) => {
  const selectedLocale = (event.target as HTMLSelectElement).value;
  setLocale(selectedLocale);
};
</script>
<template>
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
    <select
      @change="changeLocale"
      name="language"
      id="lang"
      v-model="locale"
      class="custom-select"
    >
      <option v-for="lang in languages" :value="lang.locale">
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>
