<script setup>
import Starter from './components/Starter.vue'
</script>

<template>
  <div class="grid place-items-center">
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg"  alt="Vue logo" class="logo vue" />
    </a>
  <Starter msg="Vite + Vue + Tailwind" />
  </div>
</template>

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
