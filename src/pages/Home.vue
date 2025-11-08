<template>
  <div class = "bg-black min-h-screen text-gray-300 font-sans transition-colors duration-500">
    <div id = "flashlight"></div>

    <button
      id="theme-toggle"
      class="fixed top-6 right-6 z-[999] bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-dossier hover:bg-gray-600 transition-colors"
      @click = "toggleTheme"
    >
    💡
    </button>

    <!--Main shit here-->
    <div class ="relative min-h-screen w-full p-8 md:p-16 overflow-hidden">
      <header class ="text-center my-16 md:my-24">
        <h1 class = "font-dossier text-5xl md:text-7xl font-bold text-gray-100 text-light-mode transition-colors duration-500">
          [ RUSSEL'S DOSSIER ]
        </h1>
      </header>
    </div>


  </div>

</template>


<script setup>
import {onMounted} from 'vue'

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Inter:wght@400;700&display=swap');

  .font-dossier{
    font-family: 'Special Elite', monospace;
  }
  .font-sans{
    font-family: 'Inter', sans-serif;
  }

  #flashlight{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle 300px at var(--mouse-x, 0px) var(--mouse-y, 0px),
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.85) 40%,
    rgba(0, 0, 0, 0.98) 100%);
    pointer-events: none;
    z-index: 9998;
    transition: background 0.1s ease-out;
}

</style>