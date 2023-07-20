<template>
  <header>
    <router-link :to="'/createnote'">
    <h1 class="header">Mind2.0</h1>
    </router-link>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@1,700&display=swap");

h1 {
  font-family: "Lobster Two", sans-serif;
  font-size: 4rem;
  margin-left: 4rem;
  color: #fff
}

header {
  width: 100 vw;
  height: 10rem;
  background-color: #5f3dc4;
  display: flex;
  align-items: center;
}
</style>