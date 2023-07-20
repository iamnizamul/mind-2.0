<template>
    <li>
  <router-link :to="'/' + id">
      <div class="title-container">
        <h2>{{ title }}</h2>
      </div>
      <div class="desc-container">
        <p>{{ description }}</p>
      </div>
  </router-link>
    </li>
</template>

<script setup>
import { computed } from "vue";

  const props = defineProps([
    "id", "title", "description"
  ])

</script>

<style scoped>
li {
  margin-bottom: 3rem;
  background-color: aliceblue;
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
}

.title-container {
  max-height: 6.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
}

.desc-container {
  max-height: 4rem;
  /* background-color: blue; */
  overflow: hidden;
}

h2 {
  font-size: 3rem;
}

p {
  font-size: 1.6rem;
}

a {
  text-decoration: none;
}
</style>