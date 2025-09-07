<script setup lang="ts">
import { awards, type Award } from '~/utils/constants/awards';
const uniqueYear = new Set<number>();
const grouppedByYear: Record<string, Award[]> = {};
awards.forEach((a) => uniqueYear.add(a.year));
uniqueYear.forEach((y) => {
  const filteredAwards = awards.filter((a) => a.year === y);
  grouppedByYear[y] = [...filteredAwards];
});
const sortedYear = Array.from(uniqueYear).sort().reverse();
</script>

<template>
  <section id="awards">
    <div v-for="year in sortedYear" :key="year">
      <h6>{{ year }}</h6>
      <div class="padding animation" v-for="award in grouppedByYear[year]" :key="award.name">
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
  </section>
</template>

<style lang="scss" scoped>
h6 {
  margin: 1rem 0;
}

div>p {
  padding: 0.5rem 0;
}
</style>
