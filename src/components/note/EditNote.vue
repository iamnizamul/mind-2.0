<template>
  <div v-if="noteExist" class="container">
    <base-dialog
      :show="showDialog"
      title="Confirm"
      @proceed="accept"
      @close="decline"
    >
      <p class="dialog">
        Are you sure you want to save the changes you made to this existing
        note?
      </p>
    </base-dialog>
      <div class="form-container">
        <div class="form">
          <div class="title-container" :class="{ invalid: !formIsValid }">
            <input
              type="text"
              id="title"
              class="title"
              v-model="title.val"
              required
              @blur="clearValidity('title')"
            />
          </div>
          <div class="note-container" :class="{ invalid: !formIsValid }">
            <textarea
              name=""
              id="note"
              cols=""
              rows="5"
              class="note"
              v-model="desc.val"
              required
              @blur="clearValidity('desc')"
            />
          </div>
        </div>
        <p v-if="!formIsValid" class="invalid">
          Please fill both title and description
        </p>
        <p v-else></p>
        <div class="button">
          <base-button @click="saveChanges" class="save">Save Changes</base-button>
        </div>
      </div>
  </div>
  <div v-else>{{ router.replace({path: '/createnote'}) }}</div>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
import { useNoteStore } from "../../store/notestore.js";
import { useRoute, useRouter } from "vue-router";
import { computed, ref, reactive } from "vue";

const store = useNoteStore();

const route = useRoute();
const router = useRouter();
const id = computed(() => route.params.id);

const findNote = computed(() => {
  return store.findNote(id.value)
});
console.log(findNote.value);

const noteExist = computed(() => findNote.value.title)

const showDialog = ref(false);
const title = reactive({
  val: "",
  isValid: true,
});
const desc = reactive({
  val: "",
  isValid: true,
});
const formIsValid = ref(true);

const tit = computed(() => {
  return store.editTitle(id.value);
});

const description = computed(() => {
  return store.editDescription(id.value);
});

title.val = tit.value;
desc.val = description.value;

function clearValidity(input) {
  this[input].isValid = true;
}

function validateForm() {
  formIsValid.value = true;
  if (title.val === "") {
    title.isValid = false;
    formIsValid.value = false;
  }
  if (desc.val === "") {
    desc.isValid = false;
    formIsValid.value = false;
  }
}

function saveChanges() {
  validateForm();

  if (!formIsValid.value) return;

  showDialog.value = true;
  return;
}

function accept() {
  store.saveChanges({
    id: id.value,
    title: title.val,
    description: desc.val,
  });
  router.push({ path: "/" + id.value });
  console.log(title.val);
}

function decline() {
  showDialog.value = false
}
</script>

<style scoped>
.container {
  width: 70vw;
  padding: 4% 0;
  display: flex;
  justify-content: center;
  overflow: auto;
}

.form-container {
  height: 100%;
  width: 70%;
}

.form {
  width: 100%;
  height: 75%;
  margin-bottom: 6%;
}

.title-container {
  width: 100%;
  margin-bottom: 2.4rem;
  /* border: none; */
}

input {
  width: 100%;
  border-radius: 10px;
  font-size: 2.4rem;
  /* border: none; */
  padding: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  outline: none;
}

input:hover,
input:focus {
  border: 2px solid #26184e;
  box-shadow: 0 0 5px 5px #4c319d;
}

.note-container {
  width: 100%;
  height: calc(100% - 7.4rem);
}

textarea {
  width: 100%;
  height: 100%;
  border: 2px solid #26184e;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.6;
  outline: none;
}

textarea:hover,
textarea:focus {
  border: 2px solid #26184e;
  box-shadow: 0 0 5px 5px #4c319d;
}

.button {
  width: 100%;
  text-align: center;
}

.save {
  transition: all 0.3s ease;
}

.save:hover,
.save:active {
  box-shadow: 0 0 2px 2px #4c319d;
  background-color: #ccc;
  transition: all 0.3s ease;
}

p {
  height: 1rem;
  text-align: center;
  color: red;
  font-size: 1.4rem;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.dialog {
  color: #555;
  font-size: 1.8rem;
}


@media (max-width: 62em) {
  .form-container {
    width: 80%;
  }

  .dialog {
    font-size: 1.6rem;
  }
}

@media (max-width: 53em) {
  .form-container {
    width: 85%;
  }

  input {
    font-size: 2rem;
  }

  textarea {
    font-size: 1.4rem;
  }
}
</style>