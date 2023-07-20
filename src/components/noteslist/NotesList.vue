<template>
  <div class="container">
    <div class="list-container">
      <ul>
        <list-item
          v-for="note in notes"
          :key="note.id"
          :id="note.id"
          :title="note.title"
          :description="note.description"
        ></list-item>
      </ul>
    </div>
  </div>
</template>


<script setup>
import ListItem from "./ListItem.vue";
import { useNoteStore } from "../../store/notestore.js";

const store = useNoteStore();
const notes = store.getnotes;
</script>



<style scoped>
.container {
  background-color: #212529;
  width: 30vw;
  /* height: calc(100vh - 10rem); */
  /* padding: 5rem; */
  overflow-y: scroll;
}

.list-container {
    /* background-color: red; */
    margin: 5rem;
}

ul {
  list-style: none;
}
</style>