<template>
  <!-- Dynamically bind the background and text colors with a deeper white/cream tone -->
  <div 
    class="page-shell font-sans transition-colors duration-500"
    :class="isLightOn ? 'light-mode bg-[#c7bea9] text-[#2b2824]' : 'bg-black text-gray-300'"
  >

    <div v-show="!isLightOn" id="flashlight"></div>
    <PullSwitch :isLightOn="isLightOn" @toggle="toggleTheme" />

    <div class="content-wrap relative z-10 w-full">
      <header class="header-block text-center md:mt-0">
        <h1 class="dossier-title font-dossier font-bold transition-colors duration-500" :class="isLightOn ? 'text-[#2b2824]' : 'text-gray-100'">
          [ MY DOSSIER ]
        </h1>
        <p class="dossier-subtitle font-dossier transition-colors duration-500" :class="isLightOn ? 'text-[#2b2824]' : 'text-gray-100'">
          HERE LIES EVERYTHING ABOUT MYSELF!
        </p>
      </header>

      <div class="portrait-row flex flex-col md:flex-row justify-center items-center my-8 md:my-12 -translate-y-4">
  <transition name="case-note">
    <div v-if="isLightOn" class="case-note font-dossier text-center md:text-left leading-relaxed md:mb-0">
      <p class="text-yellow-700 font-bold mb-1">SUBJECT: RUSSEL NIÑO BUNO</p>
      <p>DEVELOPER. DESIGNER. CURRENTLY EXPLORING MACHINE LEARNING.<br />PROFESSIONAL OVERTHINKER.</p>
      <p class="mt-2 opacity-80">LAST SEEN BUILDING SOMETHING<br />AT 2AM. STATUS: STILL OPEN.</p>
    </div>
  </transition>

  <img
    src="/russel_pic.jpg"
    alt="My portrait"
    class="portrait-img rounded-full border-2 border-white/20 object-cover shadow-2xl transition-all duration-500 ease-out"
    :class="isLightOn ? 'md:translate-x-10 shadow-yellow-700/30' : 'grayscale shadow-black/50'"
  />
</div>

      <section class="cards-section w-full">
        <div class="cards-row flex flex-wrap justify-center gap-10 md:gap-12 mt-6">
          <RouterLink
            to="/projects"
            class="dossier-card card-red block rounded-xl"
            style="--base-rotate: -3deg;"
            @mousemove="handleTilt"
            @mouseleave="resetTilt"
          >
            <h2 class="font-dossier text-xl md:text-2xl text-red-300 drop-shadow-md transition-colors duration-500 header-text">Case File: 001</h2>
            <h3 class="font-sans text-2xl md:text-3xl font-bold mt-2 transition-colors duration-500 title-text">PROJECTS</h3>
            <div class="w-16 h-1 bg-red-500/80 rounded-full my-3 md:my-4 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
            <p class="font-sans text-sm md:text-base transition-colors duration-500 desc-text">
              an array of my completed works: code, design, and implementation reports.
            </p>
            <span class="font-dossier text-red-500/30 text-4xl md:text-6xl absolute right-4 bottom-4 transition-colors duration-500 bg-text">TOP SECRET</span>
          </RouterLink>

          <RouterLink
            to="/stuffs"
            class="dossier-card card-blue block rounded-xl"
            style="--base-rotate: 4deg;"
            @mousemove="handleTilt"
            @mouseleave="resetTilt"
          >
            <h2 class="font-dossier text-xl md:text-2xl text-blue-300 drop-shadow-md transition-colors duration-500 header-text">Exhibit: B</h2>
            <h3 class="font-sans text-2xl md:text-3xl font-bold mt-2 transition-colors duration-500 title-text">STUFFS</h3>
            <div class="w-16 h-1 bg-blue-400/80 rounded-full my-3 md:my-4 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
            <p class="font-sans text-sm md:text-base transition-colors duration-500 desc-text">
              a showcase of things that I admire and I am obsessed with: films, songs, and many more.
            </p>
            <span class="font-dossier text-blue-500/30 text-4xl md:text-6xl absolute right-4 bottom-4 transition-colors duration-500 bg-text">FOR REVIEW</span>
          </RouterLink>

          <RouterLink
            to="/contact"
            class="dossier-card card-green block rounded-xl"
            style="--base-rotate: -3deg;"
            @mousemove="handleTilt"
            @mouseleave="resetTilt"
          >
            <h2 class="font-dossier text-xl md:text-2xl text-green-300 drop-shadow-md transition-colors duration-500 header-text">Memo: 6-7</h2>
            <h3 class="font-sans text-2xl md:text-3xl font-bold mt-2 transition-colors duration-500 title-text">CONTACT</h3>
            <div class="w-16 h-1 bg-green-400/80 rounded-full my-3 md:my-4 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
            <p class="font-sans text-sm md:text-base transition-colors duration-500 desc-text">
              Hire me I'm very broke.
            </p>
            <span class="font-dossier text-green-500/30 text-4xl md:text-6xl absolute right-4 bottom-4 transition-colors duration-500 bg-text">PRIVATE</span>
          </RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PullSwitch from '../components/PullSwitch.vue' 

const isLightOn = ref(false)

const toggleTheme = () => {
  isLightOn.value = !isLightOn.value
}

const handleTilt = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -12
  const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12
  
  card.style.setProperty('--rx', `${rotateX}deg`)
  card.style.setProperty('--ry', `${rotateY}deg`)
  card.style.setProperty('--glow-x', `${x}px`)
  card.style.setProperty('--glow-y', `${y}px`)
}

const resetTilt = (e) => {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

onMounted(() => {
  const flashlight = document.getElementById('flashlight')
  window.addEventListener('mousemove', (e) => {
    if(flashlight) {
      window.requestAnimationFrame(() => {
        flashlight.style.setProperty('--mouse-x', `${e.clientX}px`)
        flashlight.style.setProperty('--mouse-y', `${e.clientY}px`)
      })
    }
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Inter:wght@400;700&display=swap');

.font-dossier { font-family: 'Special Elite', monospace; }
.font-sans { font-family: 'Inter', sans-serif; }

.page-shell {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

@media (min-width: 768px) {
  .page-shell {
    height: 100vh;
    overflow: hidden;
  }
}

.content-wrap { padding: 2rem 1.25rem; }

@media (min-width: 768px) {
  .content-wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 3rem;
  }
}

#flashlight {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle 350px at var(--mouse-x, 0px) var(--mouse-y, 0px),
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.75) 40%,
    rgba(0, 0, 0, 0.98) 100%);
  pointer-events: none;
  z-index: 9998;
}

.header-block { flex-shrink: 0; }
.dossier-title { font-size: clamp(2.25rem, 6vw, 4.5rem); }
.dossier-subtitle { font-size: clamp(1.1rem, 2.5vw, 1.875rem); }

.portrait-img {
  position: relative;
  z-index: 1;
  width: clamp(7rem, 14vh, 12rem);
  height: clamp(7rem, 14vh, 12rem);
}

.case-note { color: #d1d5db; max-width: 20rem; }
.light-mode .case-note { color: #4a453f; }

.case-note-enter-active { transition: opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s; }
.case-note-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.case-note-enter-from, .case-note-leave-to { opacity: 0; transform: translateY(12px); }
@media (min-width: 768px) {
  .case-note-enter-from, .case-note-leave-to { transform: translateX(24px); }
}

.cards-section {
  max-width: 72rem;
  margin: 0 auto;
  perspective: 2000px;
}

@media (min-width: 768px) {
  .cards-section {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.cards-row { width: 100%; }

/* Default Dark Mode Card Text */
.title-text { color: #ffffff; }
.desc-text { color: #e5e7eb; }

.dossier-card {
  position: relative;
  width: clamp(15rem, 80vw, 20rem);
  height: clamp(17rem, 46vh, 24rem);
  padding: 2rem;
  
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  
  transform-style: preserve-3d;
  transform:
    rotate(var(--base-rotate, 0deg))
    rotateX(var(--rx, 0deg))
    rotateY(var(--ry, 0deg));
    
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease, border-color 0.4s ease, background 0.5s ease;
  will-change: transform;
}

@media (min-width: 768px) {
  .dossier-card {
    width: clamp(16rem, 24vw, 22rem);
    height: clamp(18rem, 44vh, 26rem);
  }
}

.dossier-card::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 24px;
  width: 100px;
  height: 20px;
  border-radius: 8px 8px 0 0;
  background: inherit;
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: none;
  z-index: -1;
  transition: inherit;
}

.dossier-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    circle 250px at var(--glow-x, 50%) var(--glow-y, 50%),
    rgba(255, 255, 255, 0.15), 
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 2;
}

.dossier-card:hover::after { opacity: 1; }

.card-red { box-shadow: 0 10px 30px -10px rgba(220, 38, 38, 0.3); }
.card-blue { box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.3); }
.card-green { box-shadow: 0 10px 30px -10px rgba(34, 197, 94, 0.3); }

.dossier-card:hover {
  transform:
    translateY(-15px) scale(1.05)
    rotate(0deg)
    rotateX(var(--rx, 0deg))
    rotateY(var(--ry, 0deg));
  z-index: 20;
  border-color: rgba(255, 255, 255, 0.3);
}

.card-red:hover { box-shadow: 0 20px 40px -10px rgba(220, 38, 38, 0.5), 0 0 20px rgba(220, 38, 38, 0.2); }
.card-blue:hover { box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.2); }
.card-green:hover { box-shadow: 0 20px 40px -10px rgba(34, 197, 94, 0.5), 0 0 20px rgba(34, 197, 94, 0.2); }

/* ---------- Light Mode Overrides ---------- */
.light-mode .dossier-card {
  background: rgba(230, 222, 208, 0.6); 
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
}

.light-mode .dossier-card::before {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: none;
}

/* Fix text colors washing out in light mode */
.light-mode .title-text { color: #1f2937; }
.light-mode .desc-text { color: #4b5563; }
.light-mode .card-red .header-text { color: #dc2626; }
.light-mode .card-blue .header-text { color: #2563eb; }
.light-mode .card-green .header-text { color: #16a34a; }
.light-mode .bg-text { opacity: 0.1; }

.light-mode .card-red { box-shadow: 0 10px 30px -10px rgba(220, 38, 38, 0.15); }
.light-mode .card-blue { box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.15); }
.light-mode .card-green { box-shadow: 0 10px 30px -10px rgba(34, 197, 94, 0.15); }
</style>