<template>
  <router-link :to="'/' + id">
      <li :key="id">
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

const isBookmarked = computed(() => store.isBookmarkedFn(props.id));

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
  transition: all 0.3s ease;
  border: 2px solid transparent;
  color: #26184e;
}

li:hover
{
  border: 2px solid #26184e;
  box-shadow: 0 0 3px 3px #4c319d;
  scale: 1.1;
  transition: all 0.3s ease;
}

.router-link-active li {
    border: 2px solid #26184e;
    box-shadow: 0 0 3px 3px #4c319d;
    background: #c0c6cc;
} 

.title-container {
  max-height: 2.4rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.desc-container {
  max-height: 3.75rem;
  overflow: hidden;
  word-wrap: break-word;
}

h2 {
  font-size: 2.4rem;
  overflow: hidden;
  margin-right: 2.5rem;
  word-wrap: break-word;
}

.bookmark-icon {
  height: 2.4rem;
  width: 2.4rem;
  display: none;
  position: absolute;
  right: 0;
}

.show-bookmark {
  display: initial;
}

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

@media (max-width: 53em) {
  li {
    padding: 1rem;
    margin-bottom: 2rem;
  }


  .bookmark-icon {
  height: 1.6rem;
  width: 1.6rem;
  }
}

@media (max-width: 37.5em) {
  li {
    padding: 1rem;
    margin-bottom: 1.6rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  .title-container {
    max-height: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  .desc-container {
    max-height: 2.8rem;
  }

  .bookmark-icon {
  height: 1.6rem;
  width: 1.6rem;
  }
}

@media (max-width: 30em) {
  li {
    padding: 0.5rem;
    margin-bottom: 1.2rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  .title-container {
    max-height: 1.4rem;
  }

  p {
    font-size: 1rem;
  }

  .desc-container {
    max-height: 2.4rem;
  }

  .bookmark-icon {
  height: 1.2rem;
  width: 1.2rem;
  }
}

</style>