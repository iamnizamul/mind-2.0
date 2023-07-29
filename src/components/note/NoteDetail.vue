<template>
  <div>
    <base-dialog
      :show="showDialog"
      title="Confirm"
      @proceed="accept"
      @close="decline"
    >
      <p class="dialog">
        Are you sure you want to delete this existing
        note?
      </p>
    </base-dialog>
    <div class="container">
      <div class="form-container">
        <div class="form">
          <div class="title-container">
            {{ title }}

            <!-- <input
          type="text"
          id="title"
          class="title"
          v-model="title"
          placeholder="Mind2.0"
        /> -->
          </div>
          <div class="note-container">
            {{ description }}
            <!-- <textarea
          name=""
          id="note"
          cols=""
          rows="5"
          class="note"
          v-model="desc"
          placeholder="Hi, I'm Mind2.0. Your second mind.
In this busy world, there is a lot to remember so that few things may be not be able to remember.
Don't worry, I'm here. I can remember for you."
        /> -->
          </div>
        </div>
        <div class="button">
          <router-link :to="'/' + id + '/editnote'">
            <base-button>Edit</base-button>
          </router-link>
          <!-- <router-link :to="'/createnote'"> -->
            <base-button @click="deleteNote">Delete</base-button>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
import { useNoteStore } from "../../store/notestore.js";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";

const store = useNoteStore();
const route = useRoute();
const router = useRouter();

const showDialog = ref(false);

const id = computed(() => route.params.id);

const findNote = computed(() => {
  return store.notes.find((note) => note.id === id.value);
});

const title = computed(() => findNote.value.title);
const description = computed(() => findNote.value.description);

function deleteNote() {
  showDialog.value = true
  // console.log(store.notes);
  // console.log(id.value);
}

function accept() {
  store.deleteNote(id.value);
  router.push({path: '/createnote'})
}

function decline() {
  showDialog.value = false
}
</script>

<style scoped>
.container {
  width: 70vw;
  /* height: max-content; */
  background-color: black;
  padding: 6rem 0;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  justify-content: center;
}

.form-container {
  height: 100%;
  width: 80%;
}

.form {
  width: 100%;
}

.title-container {
  width: 100%;
  font-size: 3rem;
  margin-bottom: 4rem;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  font-weight: 600;
}

.title {
  width: 100%;
  /* font-size: 3rem;
  margin-bottom: 4rem;
  border: none;
  border-radius: 10px;
  padding: 1rem; */
}

.note-container {
  width: 100%;
  height: 36rem;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.8rem;
  background-color: white;
  font-weight: 500;
}

.note {
  width: 100%;
  /* height: 36rem;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.8rem; */
}

.button {
  width: 100%;
  text-align: center;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.dialog {
  color: #555;
  font-size: 1.8rem;
}
</style>