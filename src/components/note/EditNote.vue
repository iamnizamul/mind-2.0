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
          required
        />
      </div>
    </div>
    <div class="button">
      <base-button @click="saveChanges">Save Changes</base-button>
    </div>
  </div>
</div>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
import { useNoteStore } from "../../store/notestore.js";
import { useRoute } from 'vue-router';
import { computed, ref } from "vue";

const store = useNoteStore();

const route = useRoute();
const id = computed(() => route.params.id);
const title = ref('');
const desc = ref('');

const tit = computed(() => {
   return store.editTitle(id.value)
})

const description = computed(() => {
   return store.editDescription(id.value)
})

title.value = tit.value
desc.value = description.value

function saveChanges() {
    store.saveChanges({
        id: id.value,
        title: title.value,
        description: desc.value
    })
    console.log(title.value);
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

.button {
  width: 100%;
  text-align: center;
  margin-top: 4rem;
}
</style>