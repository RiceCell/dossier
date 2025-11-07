<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <Navbar />
    <main class="p-8">
      <RouterView />
    </main>
  </div>
</template>

