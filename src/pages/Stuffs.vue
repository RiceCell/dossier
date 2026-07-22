<template>
  <div class="page-shell font-sans md:ml-64 p-6 md:p-12 transition-colors duration-500 min-h-screen" :class="{ 'light-mode': isLightOn }">
    <section class="text-center mt-16 theme-text transition-colors duration-500">
      <h2 class="text-4xl font-bold text-blue-600 mb-4">murag all about me pero idk how to design it atm like how to make it interesting</h2>
      <p class="theme-text">STUFFS NI. (add faces in view expansion sa projects. add here the other shit that is not project-related. for example, tudlo sessions, uniso secgen, handlinge event sa interhigh)</p>
    </section>
  </div>
</template>

<script setup>
import { isLightOn } from '../theme.js';
</script>

<style scoped>
.page-shell {
  background-color: #000000;
  color: #d1d5db;
}

.page-shell.light-mode {
  background-color: var(--light-bg);
}

.theme-text { color: #d1d5db; }
.light-mode .theme-text { color: var(--light-text-dark) !important; }
</style>