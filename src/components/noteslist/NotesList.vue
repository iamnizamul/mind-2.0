<template>
  <div class="container">
    <div class="list-container">
      <ul v-if="sortedNotes.length">
        <transition-group name="note">
        <list-item
          v-for="note in sortedNotes"
          :key="note.id"
          :id="note.id"
          :title="note.title"
          :description="note.description"
        ></list-item>
        </transition-group>
      </ul>
      <div v-else class="empty-list">
        <h2>
        No Notes Created...
        </h2>
      </div>
    </div>
  </div>
</template>


<script setup>
import ListItem from "./ListItem.vue";
import { useNoteStore } from "../../store/notestore.js";
import { computed } from 'vue';

const store = useNoteStore();
const storage = computed(() => localStorage.getItem('notes'));
console.log(storage.value);
const notes = computed(() => store.getnotes);

const sortedNotes = computed(() => {
  console.log(notes.value);
return notes.value.sort((a, b) => b.id - a.id).sort((a, b) => b.isBookmarked - a.isBookmarked)})
console.log(sortedNotes.value.length);
</script>



<style scoped>
.container {
  width: 29vw;
  overflow: auto;
  background: #26184e;
  margin-right: 1vw;
  border-radius: 10px;
  display: inline-block;
}

.container::-webkit-scrollbar {
  width: 2rem;
}

.container::-webkit-scrollbar-thumb {
  background-color: #1c123b;
  border: 0.4rem solid transparent;
  border-radius: 2rem;
  background-clip: padding-box;
}

.list-container {
    margin: 5rem;
}

ul {
  list-style: none;
}

.empty-list {
  color: white;
  text-align: center;
  font-size: 1.6rem;
}

.note-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.note-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.note-enter-active {
  transition: all 0.6s ease-out;
}
.note-leave-active {
  transition: all 0.6s ease-in;
  position: absolute;
}
.note-enter-to,
.note-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.note-move {
  transition: transform 0.6s ease;
}


@media (max-width: 62em) {
  .list-container {
    margin: 3.5rem 3.5rem 3.5rem 3.5rem;
  }
}

@media (max-width: 53em) {
  .list-container {
    margin: 2.5rem 2.5rem 2.5rem 2.5rem;
  }
}

@media (max-width: 37.5em) {
  .list-container {
    margin: 1.5rem 1.5rem 1.5rem 1.5rem;
  }
}
</style>