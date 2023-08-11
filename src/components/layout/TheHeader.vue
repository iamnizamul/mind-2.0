<template>
  <header>
    <router-link :to="'/createnote'">
    <h1>Mind2.0</h1>
    </router-link>
    <router-link :to="'/createnote'">
    <base-button v-if="path !== '/createnote'" class="button">Create Note</base-button>
    </router-link>
  </header>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const path = computed(() => route.path)
console.log(path);

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@1,700&display=swap");

h1 {
  font-family: "Lobster Two", sans-serif;
  font-size: 4rem;
  margin: 0;
  margin-left: 6rem;
  color: aliceblue;
  text-decoration: none;
}

a {
  text-decoration: none;
}

header {
  width: 100 vw;
  height: 9rem;
  /* background-color: #5f3dc4; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button {
  margin-right: 6rem;
  background-color: #432b89;
  color: aliceblue;
  transition: all 0.3s ease;
  width: max-content;
}

.button:hover {
  background-color: #1c123b;
  color: white;
  transition: all 0.3s ease;
}

@media(max-height: 22em) {
header {
  height: 6rem;
}

h1 {
  font-size: 3.2rem;
}

.button {
  font-size: 1.6rem;
  padding: 1rem;
}
}

@media(max-width: 62em) {
  .button {
    font-size: 1.6rem;
    padding: 1rem 1.5rem 1rem 1.5rem;
  }
}

@media (max-width: 53em) {
  /* header {
  height: 6rem;
  } */

  h1 {
    /* font-size: 3rem; */
    margin-left: 3rem;
  }

    .button {
      margin-right: 3rem;
      /* font-size: 1.2rem;
      padding: 0.7rem 1rem 0.7rem 1rem; */
    }
}

@media (max-width: 37.5em) {
  .button {
    font-size: 1.6rem;
    padding: 0.7rem 1rem 0.7rem 1rem;
  }
}
</style>