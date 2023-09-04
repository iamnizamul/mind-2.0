<template>
  <div class="container">
    <div class="form-container">
      <div class="form">
        <div class="title-container" :class="{ invalid: !title.isValid }">
          <input
            type="text"
            id="title"
            v-model="title.val"
            placeholder="Mind2.0"
            required
          />
        </div>
        <div class="note-container" :class="{ invalid: !desc.isValid }">
          <textarea
            name=""
            id="note"
            cols=""
            rows="5"
            v-model="desc.val"
            placeholder="Hi, I'm Mind2.0.
Your secondary mind. In this busy world, there is a lot to remember, so that few things may be not be able to remember.
Don't worry, I'm here. I can remember for you."
            required
          />
        </div>
      </div>
      <p v-if="!formIsValid" class="invalid">
        Please fill both title and description
      </p>
      <p v-else></p>
      <div class="button">
        <base-button @click="save" class="save">Save</base-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from "../../store/notestore.js";
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const title = reactive({
  val: "",
  isValid: true,
});
const desc = reactive({
  val: "",
  isValid: true,
});
const id = ref("");
const formIsValid = ref(true);

const store = useNoteStore();

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

function save() {
  validateForm();
  console.log(title.isValid);

  if (!formIsValid.value) {
    return;
  }
  id.value = String(Date.now());
  store.addNewElement({
    id: id.value,
    title: title.val,
    desc: desc.val,
    isBookmarked: false,
  });

  router.push({ path: "/" + id.value });
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
  margin-bottom: 1%;
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
  padding: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  outline: none;
}

input::placeholder {
  color: #bbb;
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
  resize: none;
}

textarea::placeholder {
  color: #bbb;
}

textarea:hover,
textarea:focus {
  border: 2px solid #26184e;
  box-shadow: 0 0 5px 5px #4c319d;
}

.textarea::-webkit-scrollbar {
  width: 2rem;
}

.textarea::-webkit-scrollbar-thumb {
  background-color: #1c123b;
  border: 0.4rem solid transparent;
  border-radius: 2rem;
  background-clip: padding-box;
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
  margin-bottom: 3%;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

@media (max-width: 62em) {
  .form-container {
    width: 80%;
  }
}

@media (max-width: 53em) {
  .form-container {
    width: 85%;
  }

  input {
    font-size: 2.4rem;
  }

  textarea {
    font-size: 1.4rem;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>