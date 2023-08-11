<template>
  <div v-if="noteExist" class="container">
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
    <!-- <div class="container"> -->
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
            <base-button class="edit">Edit</base-button>
          </router-link>
          <!-- <router-link :to="'/createnote'"> -->
            <base-button class="delete" @click="deleteNote">Delete</base-button>
          <!-- </router-link> -->
        </div>
      </div>
    <!-- </div> -->
  </div>
  <div v-else>{{ router.replace({path: '/createnote'}) }}</div>
</template>

<script setup>
// import BaseButton from "../ui/BaseButton.vue";
import { useNoteStore } from "../../store/notestore.js";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";

const store = useNoteStore();
const route = useRoute();
const router = useRouter();

const showDialog = ref(false);

const id = computed(() => route.params.id);

const findNote = computed(() => {
  return store.findNote(id.value)
});
console.log(findNote.value);

const noteExist = computed(() => findNote.value.title)

const title = computed(() => findNote.value.title);
const description = computed(() => findNote.value.description);

function deleteNote() {
  showDialog.value = true
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
  padding: 4% 0;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  justify-content: center;
  /* overflow: auto; */
}

.form::-webkit-scrollbar {
  width: 2rem;
}

.form::-webkit-scrollbar-thumb {
  background-color: #1c123b;
  border: 0.4rem solid transparent;
  border-radius: 2rem;
  background-clip: padding-box;
}

.form-container {
  height: 100%;
  width: 80%;
}

.form {
  width: 100%;
  height: 85%;
  margin-bottom: 6%;
  background-color: #392576;
  padding: 4%;
  border-radius: 10px;
  overflow: auto;
}

.title-container {
  width: 100%;
  font-size: 4rem;
  /* max-height: 3rem; */
  margin-bottom: 3.6rem;
  border: none;
  border-radius: 10px;
  /* padding: 1rem; */
  /* background-color: white; */
  font-weight: 600;
  color: white;
  /* overflow: auto; */
  word-wrap: break-word;
  letter-spacing: 0.1rem;
}

.title {
  /* width: 100%; */
  /* font-size: 3rem;
  margin-bottom: 4rem;
  border: none;
  border-radius: 10px;
  padding: 1rem; */
}

.note-container {
  width: 100%;
  /* height: calc(100% - 7.4rem); */
  border: none;
  border-radius: 10px;
  /* padding: 1rem; */
  font-size: 1.8rem;
  color: white;
  font-weight: 500;
  white-space: pre-wrap;
  line-height: 1.6;
  letter-spacing: 0.05rem;
  /* word-wrap: break-word; */
  /* overflow: auto; */
  /* background-color: red; */
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
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 6%;
  align-items: center;
}
/* 
.button {
  margin-right: 4rem;
  background-color: #432b89;
  color: aliceblue;
}

.button:hover {
  background-color: #1c123b;
  color: white;
}
*/

.edit {
  background-color: #432b89;
  color: aliceblue;
    transition: all 0.3s ease;

}

.edit:hover {
  background-color: #1c123b;
  color: white;
  transition: all 0.3s ease;
}

.delete {
  background-color: #fff;
  transition: all 0.3s ease;
  /* border: 2px solid transparent; */
}

.delete:hover {
  box-shadow: 0 0 2px 2px #4c319d;
  background-color: #ccc;
  transition: all 0.3s ease;
}

.dialog {
  color: #555;
  font-size: 1.8rem;
}

@media (max-width: 62em) {
  .form-container {
    width: 85%;
  }
}

@media (max-width: 53em) {
  .form-container {
    width: 85%;
  }

  .title-container {
    font-size: 3.2rem;
    margin-bottom: 2.4rem;
  }

  .note-container {
    font-size: 1.6rem;
  }

  .button {
    gap: 2rem;
  }
}
</style>