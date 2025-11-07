<template>
  <nav class="bg-blue-600 text-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 class="text-xl font-semibold">Rasil’s Portfolio</h1>
      <div class="space-x-6">
        <RouterLink to="/" class="hover:text-blue-200">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-blue-200">About</RouterLink>
        <RouterLink to="/projects" class="hover:text-blue-200">Projects</RouterLink>
      </div>
    </div>
  </nav>
</template>