<template>
  <router-link :to="'/' + id">
    <li>
      <div class="title-container">
        <h2>{{ title }}</h2>
        <ion-icon
          v-if="isBookmarked"
          class="bookmark-icon show-bookmark"
          name="bookmark-sharp"
          @click="toggleBookmark"
        ></ion-icon>
        <ion-icon
          v-else
          class="bookmark-icon"
          name="bookmark-outline"
          @click="toggleBookmark"
        ></ion-icon>
      </div>
      <div class="desc-container">
        <p>{{ description }}</p>
      </div>
    </li>
  </router-link>
</template>

<script setup>
import { computed, ref } from "vue";
import { useNoteStore } from "../../store/notestore";

const props = defineProps({
  id: "id",
  title: "title",
  description: "description",
});
const store = useNoteStore();

const isBookmarked = ref("");

function toggleBookmark() {
  store.toggleBookmark(props.id);
  isBookmarked.value = store.isBookmarkedFn(props.id);
  console.log(isBookmarked.value);
}
</script>

<style scoped>
li {
  margin-bottom: 3rem;
  background-color: aliceblue;
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
}

.title-container {
  max-height: 2.4rem;
  margin-bottom: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}

.desc-container {
  max-height: 3.75rem;
  /* background-color: blue; */
  overflow: hidden;
}

h2 {
  font-size: 2.4rem;
}

.bookmark-icon {
  height: 2.4rem;
  width: 2.4rem;
  display: none;
}

.show-bookmark {
  display: initial;
}

/* li:link .bookmark-icon,
li:visited .bookmark-icon {
  display: initial;
} */

li:hover .bookmark-icon,
li:active .bookmark-icon {
  display: initial;
}

p {
  font-size: 1.6rem;
}

a {
  text-decoration: none;
}
</style>