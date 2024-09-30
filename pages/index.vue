<script setup lang="ts">
const routes = [
  {
    to: "/about",
    name: "about"
  },
  {
    to: "/blog",
    name: "blog"
  },
  {
    to: "/projects",
    name: "projects"
  },
  {
    to: "/experience",
    name: "experience"
  },
  {
    to: "/awards",
    name: "awards"
  },
]

</script>

<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.name">
        <NuxtLink :to="route.to">
          {{ route.name }}
        </NuxtLink>
      </li>
      <!-- <li> -->
      <!--   <NuxtLink to="/projects">projects</NuxtLink> -->
      <!-- </li> -->
      <!-- <li> -->
      <!--   <NuxtLink to="/about">about</NuxtLink> -->
      <!-- </li> -->
      <!-- <li> -->
      <!--   <NuxtLink to="/experience">experience</NuxtLink> -->
      <!-- </li> -->
      <!-- <li> -->
      <!--   <NuxtLink to="/awards">awards</NuxtLink> -->
      <!-- </li> -->
    </ul>
  </nav>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, est nihil! Necessitatibus animi, hic commodi
    voluptates quasi cupiditate, laudantium cumque tempora totam nesciunt aperiam porro ea delectus repellendus amet
    doloremque!
  </div>
</template>

<style lang="scss"></style>
