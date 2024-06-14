<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="p-4">
    <header>
      <h1 class="text-2xl">{{ msg }}</h1>
      <p class="">
        This is going to be a evolving boilerplate with Vite, Vue and Tailwind.
      </p>
    </header>

    <p>Todo's sorted on priority</p>
    <ul>
      <li class="">Add components</li>
      <li>Add state Manager</li>
      <li>Add router</li>
      <li>Add tests</li>
      <li>Add docs</li>
      <li>Add styling</li>
    </ul>

    <div class="">
      <button class="border-[var(--border)] rounded-full" type="button" @click="count++">count is {{ count }}</button>
      <p>
        You can check out the terminal to see if HMR works.
      </p>
    </div>
  </div>

</template>

<style scoped></style>
