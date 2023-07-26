<template>
  <div class="container">
    <div class="form-container">
      <div class="form">
        <div class="title-container" :class="{invalid: !title.isValid}">
          <input
            type="text"
            id="title"
            class="title"
            v-model="title.val"
            placeholder="Mind2.0"
            required
            @blur="clearValidity('title')"
          />
        </div>
        <div class="note-container" :class="{invalid: !desc.isValid}">
          <textarea
            name=""
            id="note"
            cols=""
            rows="5"
            class="note"
            v-model="desc.val"
            placeholder="Hi, I'm Mind2.0. Your second mind.
In this busy world, there is a lot to remember, so that few things may be not be able to remember.
Don't worry, I'm here. I can remember for you."
            required
            @blur="clearValidity('desc')"
          />
        </div>
      </div>
      <p v-if="!formIsValid" class="invalid">Please fill both title and description</p>
      <p v-else></p>
      <div class="button">
        <base-button @click="save">Save</base-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
import { useNoteStore } from "../../store/notestore.js";
import { ref, reactive } from "vue";

const title = reactive({
  val: "",
  isValid: true
});
const desc = reactive({
  val: "",
  isValid: true
});
const id = ref("");
const formIsValid = ref(true)

const store = useNoteStore();

function clearValidity(input) {
  this[input].isValid = true
}

function validateForm() {
  formIsValid.value = true;
  if (title.val === '') {
    title.isValid = false;
    formIsValid.value = false;
  }
  if (desc.val === '') {
    desc.isValid = false;
    formIsValid.value = false;
  }
}

function save() {
  validateForm();

  if (!formIsValid.value) {
    return
  }
    store.addNewElement({
      id: String(Date.now()),
      title: title.val,
      desc: desc.val,
      isBookmarked: false,
    });
    title.val = "";
    desc.val = "";
  // } else {
  //   return
  // }



}
</script>

<style scoped>
.container {
  width: 70vw;
  /* height: max-content; */
  background-color: yellow;
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
  margin-bottom: 4rem;
  /* border-radius: 10px; */
  
}

input {
  width: 100%;
  border-radius: 10px;
  font-size: 3rem;
  border: 1px solid transparent;
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

.show--error {
  color: white;
}

.hide--error {
  visibility: hidden;
}

.button {
  width: 100%;
  text-align: center;
  margin-top: 2.6rem;
}

p {
  height: 1rem;
  text-align: center;
  color: red;
  font-size: 1.4rem
};

.invalid input,
.invalid textarea {
  border:  1px solid red;
}

</style>