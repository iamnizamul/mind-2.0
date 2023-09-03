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
  <div v-if="noteExist" class="container">
      <div class="form-container">
        <div class="form">
          <div class="title-container">
            {{ title }}
          </div>
          <div class="note-container">
            {{ description }}
          </div>
        </div>
        <div class="button">
          <router-link :to="'/' + id + '/editnote'">
            <base-button class="edit">Edit</base-button>
          </router-link>
            <base-button class="delete" @click="deleteNote">Delete</base-button>
        </div>
      </div>
  </div>
  <div v-else>{{ router.replace({path: '/createnote'}) }}</div>
</div>
</template>

<script setup>
import { useNoteStore } from "../../store/notestore.js";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";

const store = useNoteStore();
const route = useRoute();
const router = useRouter();

const showDialog = ref(false);

// const id = computed(() => route.params.id);
const id = ref('');
id.value = route.params.id

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
  router.push({path: '/createnote'})
  setTimeout(function(){
    store.deleteNote(id.value);
  }, 2)
}

function decline() {
  showDialog.value = false
}
</script>

<style scoped>
.container {
  width: 70vw;
  background-color: black;
  padding: 4% 0;
  display: flex;
  justify-content: center;
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
  height: 80%;
  margin-bottom: 6%;
  background-color: #392576;
  padding: 4%;
  border-radius: 10px;
  overflow: auto;
}

.title-container {
  width: 100%;
  font-size: 4rem;
  margin-bottom: 3.6rem;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  color: white;
  word-wrap: break-word;
  letter-spacing: 0.1rem;
}

.note-container {
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 1.8rem;
  color: white;
  font-weight: 500;
  white-space: pre-wrap;
  line-height: 1.6;
  letter-spacing: 0.05rem;
}

.note {
  width: 100%;
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

.edit {
  background-color: #432b89;
  color: aliceblue;
    transition: all 0.3s ease;

}

.edit:hover,
.edit:active {
  background-color: #1c123b;
  color: white;
  transition: all 0.3s ease;
}

.delete {
  background-color: #fff;
  transition: all 0.3s ease;
}

.delete:hover,
.delete:active {
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