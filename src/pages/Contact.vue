<template>
  <div class="page-shell font-sans md:ml-64 p-6 md:p-12 transition-colors duration-500 min-h-screen" :class="{ 'light-mode': isLightOn }">
    <section class="text-center mt-16 theme-text transition-colors duration-500">
      <h2 class="text-4xl font-bold text-blue-600 mb-4">This is Russel's Dossier. Then have boxes that link to project, stuffs and contact</h2>
      <p class="theme-text">CONTACT NI. Add languages sa MAIN Jud i think</p>
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