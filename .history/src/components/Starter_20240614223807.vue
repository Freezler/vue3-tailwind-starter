<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p></p>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      You can check out the terminal to see if HMR works.
    </p>
  </div>

  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
