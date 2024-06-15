<script setup>


</script>

<template>
    <div id="app">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <router-view />
    </div>
  </template>

  <script>
export default {
  name: 'App'
}
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #b84281fd);
}
</style>
