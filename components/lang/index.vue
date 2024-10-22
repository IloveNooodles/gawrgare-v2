<script setup lang="ts">
import { languages } from '~/utils/constants/languages';


const { locale, setLocale } = useI18n();
const changeLocale = (event: Event) => {
  const selectedLocale = (event.target as HTMLSelectElement).value;
  setLocale(selectedLocale);
};

</script>

<template>
  <select @change="changeLocale" name="language" id="lang" v-model="locale" class="custom-select">
    <option v-for="lang in languages" :value="lang.locale">
      {{ lang.name }}
    </option>
  </select>
</template>
