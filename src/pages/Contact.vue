<template>
  <div 
    class="page-shell font-sans md:ml-64 p-6 md:p-12 transition-colors duration-500 h-screen overflow-hidden relative" 
    :class="{ 'light-mode': isLightOn }"
    ref="physicsContainer"
  >
    <div class="max-w-7xl mx-auto mt-16 md:mt-0 relative z-10 pointer-events-none h-full flex flex-col">
      
      <header class="mb-12 text-center pointer-events-auto">
        <h1 class="font-dossier text-3xl md:text-5xl font-bold tracking-wider text-gray-100 theme-heading transition-colors duration-500">
          [ COMMS LINK ]
        </h1>
        <p class="font-dossier text-gray-400 theme-subheading mt-2 transition-colors duration-500">
          ESTABLISH CONNECTION WITH AGENT
        </p>
      </header>

      <!-- SECTION 1: SERIOUS (Fixed to the board) -->
      <section class="mb-16 pointer-events-auto">
        <h2 class="font-dossier text-xl font-bold mb-6 text-gray-200 theme-heading border-b border-white/20 pb-2 inline-block theme-border transition-colors duration-500">
          [ OFFICIAL CHANNELS ]
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a 
            v-for="link in seriousLinks" 
            :key="link.name" 
            :href="link.url" 
            target="_blank"
            class="glass-card p-6 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300"
          >
            <div class="w-12 h-12 flex items-center justify-center rounded bg-black/40 border border-gray-600/50 group-hover:border-red-500/50 transition-colors">
              <span class="text-2xl" v-html="link.svg"></span>
            </div>
            <div>
              <h3 class="font-dossier font-bold text-red-400 group-hover:text-red-300">{{ link.name }}</h3>
              <p class="text-xs font-mono theme-text opacity-70">{{ link.handle }}</p>
            </div>
          </a>
        </div>
      </section>
      
      <div class="text-center mt-auto pb-10 opacity-50 font-dossier text-sm theme-text pointer-events-auto select-none">
        [ WARNING: UNAUTHORIZED ASSETS DETECTED IN GRAVITY WELL ]
      </div>

    </div>

    <!-- SECTION 2: UNSERIOUS (Physics/Falling Texts - NO BOXES) -->
    <a
      v-for="(item, index) in funLinks"
      :key="item.name"
      :href="item.isDragging ? null : item.url"
      target="_blank"
      class="absolute top-0 left-0 flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform duration-100 ease-out"
      :style="{ 
        transform: `translate(${item.x}px, ${item.y}px)`,
        zIndex: item.isDragging ? 50 : 20,
        width: `${itemWidth}px`,
        height: `${itemHeight}px`
      }"
      @mousedown.prevent="startDrag($event, index)"
      @touchstart.prevent="startDrag($event, index)"
    >
      <span class="font-dossier text-lg theme-text whitespace-nowrap select-none pointer-events-none drop-shadow-md">
        {{ item.name }}: <span class="text-red-400 font-bold">{{ item.handle }}</span>
      </span>
    </a>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { isLightOn } from '../theme.js';

// --- DATA ---

const seriousLinks = [
  {
    name: 'GMAIL',
    handle: 'agent@classified.com',
    url: 'mailto:your.email@gmail.com',
    svg: '✉️' 
  },
  {
    name: 'LINKEDIN',
    handle: '/in/your-profile',
    url: 'https://linkedin.com',
    svg: '💼'
  },
  {
    name: 'GITHUB',
    handle: '@your-username',
    url: 'https://github.com',
    svg: '💻'
  }
];

const funLinks = ref([
  { name: 'SPOTIFY', handle: '@RiceCell', url: 'https://spotify.com', x: 0, y: -100, vx: 0, vy: 0, isDragging: false },
  { name: 'LETTERBOXD', handle: '@RiceCell', url: 'https://letterboxd.com', x: 0, y: -250, vx: 0, vy: 0, isDragging: false },
  { name: 'DISCORD', handle: '@RiceCell', url: 'https://discord.com', x: 0, y: -400, vx: 0, vy: 0, isDragging: false },
]);


// --- PHYSICS ENGINE ---

const physicsContainer = ref(null);

// Adjusted sizes for bare text hitboxes
const itemWidth = 240;  
const itemHeight = 30; 

const gravity = 0.7;
const bounceDampening = 0.55; 
const friction = 0.96; 

let animationFrameId = null;
let dragState = { activeIndex: null, offsetX: 0, offsetY: 0, lastX: 0, lastY: 0 };

const updatePhysics = () => {
  if (!physicsContainer.value) return;
  
  const container = physicsContainer.value;
  const maxX = container.clientWidth - itemWidth;
  const maxY = container.clientHeight - itemHeight;

  funLinks.value.forEach((item, index) => {
    if (index === dragState.activeIndex) {
      item.vx = item.x - dragState.lastX;
      item.vy = item.y - dragState.lastY;
      dragState.lastX = item.x;
      dragState.lastY = item.y;
      return; 
    }

    item.vy += gravity;
    item.vx *= friction;
    
    item.x += item.vx;
    item.y += item.vy;

    // Floor Collision
    if (item.y >= maxY) {
      item.y = maxY;
      if (Math.abs(item.vy) < 2) {
        item.vy = 0;
      } else {
        item.vy *= -bounceDampening;
      }
      item.vx *= 0.9; 
    }
    
    // Ceiling Collision
    if (item.y <= 0) {
      item.y = 0;
      item.vy *= -bounceDampening;
    }

    // Wall Collisions
    if (item.x >= maxX) {
      item.x = maxX;
      item.vx *= -bounceDampening;
    } else if (item.x <= 0) {
      item.x = 0;
      item.vx *= -bounceDampening;
    }
  });

  animationFrameId = requestAnimationFrame(updatePhysics);
};

// --- DRAG CONTROLS ---

const startDrag = (event, index) => {
  dragState.activeIndex = index;
  const item = funLinks.value[index];
  item.isDragging = true;
  
  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const clientY = event.touches ? event.touches[0].clientY : event.clientY;

  const rect = physicsContainer.value.getBoundingClientRect();
  dragState.offsetX = clientX - rect.left - item.x;
  dragState.offsetY = clientY - rect.top - item.y;
  
  dragState.lastX = item.x;
  dragState.lastY = item.y;

  window.addEventListener('mousemove', onDrag);
  window.addEventListener('touchmove', onDrag, { passive: false });
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchend', stopDrag);
};

const onDrag = (event) => {
  if (dragState.activeIndex === null) return;
  
  if (event.touches) event.preventDefault();

  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const clientY = event.touches ? event.touches[0].clientY : event.clientY;
  
  const rect = physicsContainer.value.getBoundingClientRect();
  const item = funLinks.value[dragState.activeIndex];
  
  item.x = clientX - rect.left - dragState.offsetX;
  item.y = clientY - rect.top - dragState.offsetY;
};

const stopDrag = () => {
  if (dragState.activeIndex !== null) {
    funLinks.value[dragState.activeIndex].isDragging = false;
    dragState.activeIndex = null;
  }
  window.removeEventListener('mousemove', onDrag);
  window.removeEventListener('touchmove', onDrag);
  window.removeEventListener('mouseup', stopDrag);
  window.removeEventListener('touchend', stopDrag);
};

// --- LIFECYCLE ---

onMounted(() => {
  const containerWidth = physicsContainer.value.clientWidth;
  funLinks.value.forEach((item) => {
    item.x = Math.random() * (containerWidth - itemWidth - 40) + 20;
  });

  animationFrameId = requestAnimationFrame(updatePhysics);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('mousemove', onDrag);
  window.removeEventListener('touchmove', onDrag);
  window.removeEventListener('mouseup', stopDrag);
  window.removeEventListener('touchend', stopDrag);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Inter:wght@400;500;700&display=swap');

.font-dossier { font-family: 'Special Elite', monospace; }
.font-sans { font-family: 'Inter', sans-serif; }

.page-shell {
  background-color: #000000;
  color: #d1d5db;
}

.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}

.theme-text { color: #d1d5db; }

/* ---------- LOCAL LIGHT MODE OVERRIDES ---------- */

.page-shell.light-mode {
  background-color: #c7bea9;
}

.light-mode .theme-heading { color: #000000 !important; }
.light-mode .theme-subheading { color: #1f2937 !important; }
.light-mode .theme-text { color: #111827 !important; }
.light-mode .theme-border { border-color: #a89d87 !important; }

.light-mode .glass-card {
  background: rgba(245, 242, 235, 0.5); 
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
}
</style>