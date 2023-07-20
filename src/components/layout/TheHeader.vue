<template>
  <header>
    <router-link :to="'/createnote'">
    <h1 class="header">Mind2.0</h1>
    </router-link>
    <router-link :to="'/createnote'">
    <base-button v-if="path !== '/createnote'" class="button">Create note</base-button>
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
  margin-left: 4rem;
  color: #fff
}

header {
  width: 100 vw;
  height: 10rem;
  background-color: #5f3dc4;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button {
  margin-right: 4rem;
}
</style>