<template>
  <nav class="bg-indigo-900 text-white shadow-lg" style="background-color: #14161a;">
    <div class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
      <!-- Home link here-->
      <RouterLink 
        to="/" class="text-xl font-semibold hover:text-blue-300 transition duration-200"> My Dossier</RouterLink>
     
      <!-- Navigation links -->
      <div class="space-x-6 text-lg">
        <RouterLink to="/projects" class="hover:text-yellow-200 transition duration-200">Projects</RouterLink>
        <RouterLink to="/stuffs" class="hover:text-yellow-200 transition duration-200">Stuffs</RouterLink>
        <RouterLink to="/contact" class="hover:text-yellow-200 transition duration-200">Contact</RouterLink>
      </div>
    </div>
  </nav>
</template>
