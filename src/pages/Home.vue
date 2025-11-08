<template>
  <div class = "bg-black min-h-screen text-gray-300 font-sans transition-colors duration-500">
    <div id = "flashlight"></div>

    <button
      id="theme-toggle"
      class="fixed top-6 right-6 z-[999] bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-dossier hover:bg-gray-600 transition-colors"
      @click = "toggleTheme"
    >
      [ TURN THE LIGHTS ON ]
    </button>

    <!--Main shit here-->
    <div class ="relative min-h-screen w-full p-8 md:p-16 overflow-hidden">
      <header class ="text-center my-16 md:my-24">
        <h1 class = "font-dossier text-5xl md:text-7xl font-bold text-gray-100 text-light-mode transition-colors duration-500">
          [ RUSSEL'S DOSSIER ]
        </h1>
        <p class = "text-lg text-gray-400 text-light-mode mt-4 font-sans transition-colors duration-500">
          CLASSIFIED // FOR YOUR EYES ONLY
        </p>
      </header>

      <!-- Portrait -->
      <div class = "flex justify-center my-16">
        <div
          class = "glitch-hover w-48 h-48 bg-gray-800 card-light-mode border-4 border-gray-700 rounded-full flex items-center justify-center p-4 transition-all duration-500"
        >
          <img 
            src= "/russel_pic.jpg"
            alt="My portrait"
            class="rounded-full"
          />
        </div>
      </div>



    </div>


  </div>

</template>


<script setup>
import { onMounted } from 'vue'

const toggleTheme = () => {
  document.body.classList.toggle('light-mode')
  const btn = document.getElementById('theme-toggle')
  btn.textContent = document.body.classList.contains('light-mode')
    ? '[ TURN THE LIGHTS OFF ]'
    : '[ TURN THE LIGHTS ON ]'
}

onMounted(() => {
  const flashlight = document.getElementById('flashlight')
  window.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(() => {
      flashlight.style.setProperty('--mouse-x', `${e.clientX}px`)
      flashlight.style.setProperty('--mouse-y', `${e.clientY}px`)
    })
  })
})
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

body.light-mode #flashlight {
  display: none;
}

body.light-mode {
  background-color: #f3f4f6;
}

body.light-mode .text-light-mode {
  color: #1f2937;
}


</style>