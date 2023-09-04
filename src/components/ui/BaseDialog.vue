<template>
  <div>
    <div v-if="show" @click="decline" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <header>
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <menu>
          <slot name="actions">
            <base-button class="yes-button" @click="accept">Yes</base-button>
            <base-button class="no-button" @click="decline">No</base-button>
          </slot>
        </menu>
      </dialog>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({ show: "show", title: "title" });
const emit = defineEmits(["proceed", "close"]);

console.log(props.show);

function accept() {
  emit("proceed");
}

function decline() {
  emit("close");
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 30vh;
  left: 35%;
  width: 30%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
  font-size: 2.4rem;
}

section {
  padding: 1rem;
  margin-bottom: 3rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  /* justify-content: space-around; */
}

.yes-button {
  background-color: #432b89;
  color: #fff;
}

.yes-button:hover {
  background-color: #1c123b;
}

.no-button:hover {
  /* background-color: #4c319d;
  color: #fff; */
  background-color: #ddd;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 70em) {
  dialog {
    left: 30%;
    width: 40%;
  }
}

@media (max-width: 53em) {
  dialog {
    left: 20%;
    width: 60%;
  }
}

@media (max-width: 37.5em) {
  dialog {
    left: 10%;
    width: 80%;
  }
}
</style>