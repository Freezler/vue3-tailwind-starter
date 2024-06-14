<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="text-3xl font-bold underline text-[--text-color]">{{ msg }}</h1>

  <p>
    This is going to be a evolving boilerplate with Vite, Vue and Tailwind.
  </p>
  <p>Todo's sorted on priority</p>
  <ul>
    <li class="">Add components</li>
    <li>Add state Manager</li>
    <li>Add router</li>
    <li>Add tests</li>
    <li>Add docs</li>
    <li>Add styling</li>
  </ul>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      You can check out the terminal to see if HMR works.
    </p>
  </div>


</template>

<style scoped></style>
