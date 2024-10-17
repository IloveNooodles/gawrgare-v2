<script setup lang="ts">
import { awards, type Award } from '~/utils/constants/awards';
const uniqueYear = new Set<number>();
const grouppedByYear: Record<string, Award[]> = {};
awards.forEach((a) => uniqueYear.add(a.year));
uniqueYear.forEach((y) => {
  console.log(y);
  const filteredAwards = awards.filter((a) => a.year === y);
  grouppedByYear[y] = [...filteredAwards];
});
const sortedYear = Array.from(uniqueYear).sort().reverse();
</script>

<template>
  <article id="awards">
    <div v-for="year in sortedYear">
      <h6>{{ year }}</h6>
      <div v-for="award in grouppedByYear[year]">
        <p v-if="award.place == 1">
          [{{ award.scope }}] {{ `${award.name} — ${award.organizer}` }},
          {{ $t('awardfirst') }}
        </p>
        <p v-else>
          [{{ award.scope }}] {{ `${award.name} — ${award.organizer}` }},
          {{ $t('awardplace', award.place) }}
        </p>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
h6 {
  margin: 1rem 0;
}
</style>
