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
    
    <div></div>
    <p>Todo's sorted on priority</p>
    <ul class="mx-auto mt-4 border-2 border-red-500 ">
      <li class="">Add components</li>
      <li>Add state Manager</li>
      <li>Add router</li>
      <li>Add tests</li>
      <li>Add docs</li>
      <li>Add styling</li>
    </ul>

    <div class="">
      <p>the count is:{{ count }}</p>
      <button class="border-2 border-red-500 w-[72px] rounded-[12px]" type="button" 
      @click="count++">+</button>
      <p>
        You can check out the terminal to see if HMR works.
      </p>
    </div>
  </div>

</template>

<style scoped></style>
