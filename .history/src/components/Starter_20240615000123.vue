<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="grid p-4 ">
    <header class="grid place-items-center">
      <h1 class="text-2xl">{{ msg }}</h1>
      <p class="">
        This is going to be a evolving boilerplate with Vite, Vue and Tailwind.
      </p>
    </header>

    <div class="mt-8">
      <p>Todo's sorted on priority</p>
      <ul class="py-1 pl-2 mx-2 my-4 border-2 border-gray-800">
        <li class="line-through text-red-900/50">Add components</li>
        <li class="">Add state Manager</li>
        <li>Add router</li>
        <li>Add tests</li>
        <li>Add docs</li>
        <li>Add styling</li>
      </ul>
    </div>

    <div class="grid place-items-center">
      <button class="border-2 border-red-500 w-[72px] rounded-[24px]" type="button" @click="count++">+</button>
      <p>the count is: {{ count }}</p>
    </div>
    <footer class="absolute bottom-0 flex items-center justify-center">
      <p>
        You can check out the terminal to see if HMR works.
      </p>
    </footer>
  </div>

</template>

<style scoped></style>
