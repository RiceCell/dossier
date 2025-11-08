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

      <!-- Mah face -->
      <div class = "flex justify-center my-16">
          <img 
            src= "/russel_pic.jpg"
            alt="My portrait"
            class="w-48 h-48 rounded-full border-2 border-gray-500 object-cover shadow-md grayscale"
          />
      </div>

      <!--Cards-->
      <section class = "w-full max-w-5xl mx-auto">
        <div class = "flex flex-wrap justify-center gap-8 md:gap-12 p-4">
          <RouterLink 
            to="/projects"
            class = "dossier-card block w-72 h-80 bg-gray-900 card-light-mode border border-gray-700 rounded-lg p-6 transform rotate-[-3deg]"
          >
            <h2 class="font-dossier text-2xl text-yellow-300">Case File: 001</h2>
            <h3 class="font-sans text-3xl font-bold text-gray-100 text-light-mode mt-2">PROJECTS</h3>
            <div class="w-16 h-1 bg-red-600 my-4"></div>
            <p class="font-sans text-gray-400 text-light-mode">
              An array of my completed works: code, design, and implementation reports.
            </p>
            <span class="font-dossier text-red-500 text-6xl absolute right-4 bottom-4 opacity-20">TOP SECRET</span>
          </RouterLink>

          <RouterLink
            to="/stuffs"
            class="dossier-card block w-72 h-80 bg-gray-900 card-light-mode border border-gray-700 rounded-lg p-6 transform rotate-[4deg]"
          >
            <h2 class="font-dossier text-2xl text-yellow-300">Exhibit: A</h2>
            <h3 class="font-sans text-3xl font-bold text-gray-100 text-light-mode mt-2">STUFFS</h3>
            <div class="w-16 h-1 bg-blue-500 my-4"></div>
            <p class="font-sans text-gray-400 text-light-mode">
              Showcase of what I like: films, songs, and etcetera.
            </p>
            <span class="font-dossier text-blue-500 text-6xl absolute right-4 bottom-4 opacity-20">FOR REVIEW</span>
          </RouterLink>

          <RouterLink
            to="/contact"
            class="dossier-card block w-72 h-80 bg-gray-900 card-light-mode border border-gray-700 rounded-lg p-6 transform rotate-[-3deg]"
          >
            <h2 class="font-dossier text-2xl text-yellow-300">Memo: 6-7</h2>
            <h3 class="font-sans text-3xl font-bold text-gray-100 text-light-mode mt-2">CONTACT</h3>
            <div class="w-16 h-1 bg-green-500 my-4"></div>
            <p class="font-sans text-gray-400 text-light-mode">
              Hire me I'm very broke.
            </p>
            <span class="font-dossier text-green-500 text-6xl absolute right-4 bottom-4 opacity-20">PRIVATE</span>
          </RouterLink>
        </div>
      </section>
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

.dossier-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.dossier-card:hover {
  transform: translateY(-10px) rotate(0deg) !important;
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
  z-index: 10;
}
@keyframes glitch {
  0%, 50%, 100% { transform: translate(0, 0); }
  10%, 40% { transform: translate(-2px, 2px); }
  20%, 30% { transform: translate(2px, -2px); }
}
.glitch-hover:hover {
  animation: glitch 0.5s infinite;
}

</style>