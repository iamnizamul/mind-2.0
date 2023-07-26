<template>
  <div class="container">
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
        <base-button @click="saveChanges">Save Changes</base-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
import { useNoteStore } from "../../store/notestore.js";
import { useRoute } from "vue-router";
import { computed, ref, reactive } from "vue";

const store = useNoteStore();

const route = useRoute();
const id = computed(() => route.params.id);
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

  store.saveChanges({
    id: id.value,
    title: title.val,
    description: desc.val,
  });
  console.log(title.val);
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
}

input {
  width: 100%;
  font-size: 3rem;
  margin-bottom: 4rem;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
}

.note-container {
  width: 100%;
}

textarea {
  width: 100%;
  height: 36rem;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: 500;
}

.button {
  width: 100%;
  text-align: center;
  margin-top: 2.6rem;
}

p {
  height: 1rem;
  font-size: 1.4rem;
  color: red;
  text-align: center;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>