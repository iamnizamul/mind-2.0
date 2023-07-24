<template>
  <div class="container">
    <div class="list-container">
      <ul>
        <list-item
          v-for="note in sortedNotes"
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
import { computed } from 'vue';

const store = useNoteStore();
const notes = store.getnotes;

const sortedNotes = computed(() => notes.sort((a, b) => a.id - b.id).sort((a, b) => b.isBookmarked - a.isBookmarked))
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