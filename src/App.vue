<template>
  <div class="container">
    <div class="header">
      <the-header></the-header>
    </div>
    <div class="body">
      <router-view></router-view>
      <notes-list></notes-list>
    </div>
  </div>
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import NotesList from "./components/noteslist/NotesList.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* background-color: #5f3dc4 */
  font-family: "Rubik", sans-serif;
}

html {
  font-size: 62.5%;
}

.container {
  background: radial-gradient(circle, #392576 ,  #26184e 70%);
  background-attachment: fixed;
}

.body {
  display: flex;
  height: calc(100vh - 9rem);
}

.header {
  width: 100%;
}

@media (max-height: 22em) {
  .body {
    height: calc(100vh - 6rem);
  }
}
</style>