<template>
  <div class="container">
    <div class="form-container">
      <div class="form">
        <div class="title-container">
          <input
            type="text"
            id="title"
            class="title"
            v-model="title"
            placeholder="Mind2.0"
            required
          />
        </div>
        <div class="note-container">
          <textarea
            name=""
            id="note"
            cols=""
            rows="5"
            class="note"
            v-model="desc"
            placeholder="Hi, I'm Mind2.0. Your second mind.
In this busy world, there is a lot to remember, so that few things may be not be able to remember.
Don't worry, I'm here. I can remember for you."
            required
          />
        </div>
        <!-- <p :class="mode">Please fill both the inputs✌</p> -->
      </div>
      <div class="button">
        <base-button @click="save">Save</base-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
import { useNoteStore } from "../../store/notestore.js";
import { computed, ref } from "vue";

const title = ref("");
const desc = ref("");
const id = ref("");
// const error = ref(Boolean);
const mode = ref('')

const store = useNoteStore();
// error.value = false

function save() {
  if (title.value !== "" && desc.value !== "") {
    // data.value.title = title.value;
    // data.value.description = desc.value;
    // error.value = false;
    store.addNewElement({
      id: String(Date.now()),
      title: title.value,
      desc: desc.value,
      isBookmarked: false,
    });
    title.value = "";
    desc.value = "";
  } else {
    // error.value = true;
    return
  }

  const errorMode = computed(() => {
    if (error.value) {
      return 'show--error'
    } else {
      return 'hide-error'
    }
  })
  // mode.value = errorMode.value

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

.title {
  width: 100%;
  font-size: 3rem;
  margin-bottom: 4rem;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
}

.note-container {
  width: 100%;
}

.note {
  width: 100%;
  height: 36rem;
  border: none;
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
  margin-top: 4rem;
}
</style>