<script setup>
import Starter from './components/Starter.vue'
</script>

<template>
  <div class="">
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg"  alt="Vue logo" class="logo vue" />
    </a>
  </div>
  <Starter msg="Vite + Vue + Tailwind" />
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
