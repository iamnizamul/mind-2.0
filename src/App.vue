<template>
  <div>
    <header>
    <the-header></the-header>
    </header>
    <body>
      <router-view></router-view>
      <notes-list></notes-list>
    </body>
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

body {
  display: flex;
  height: calc(100vh - 10rem);
}

header {
  width: 100%;
}

</style>