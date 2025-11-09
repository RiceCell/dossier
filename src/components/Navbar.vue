<template>
  <nav 
    class="text-white shadow-lg z-50 transition-shadow duration-300 ease-in-out" 
    :class="{ 'shadow-xl shadow-gray-900/50': isScrolled }"
    style="background-color: #2e3233; position: sticky; top: 0;"
  >
    <div class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
      <RouterLink 
        to="/" 
        class="text-xl font-semibold hover:text-blue-300 transition duration-200"
      >
        My Dossier
      </RouterLink>
      
      <div class="space-x-6 text-lg">
        <RouterLink to="/projects" class="hover:text-yellow-200 transition duration-200">Projects</RouterLink>
        <RouterLink to="/stuffs" class="hover:text-yellow-200 transition duration-200">Stuffs</RouterLink>
        <RouterLink to="/contact" class="hover:text-yellow-200 transition duration-200">Contact</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
</style>