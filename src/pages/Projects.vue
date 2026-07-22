<template>
  <!-- Added md:ml-64 to push the entire page content to the right of the sidebar -->
  <div class="page-shell font-sans md:ml-64 p-6 md:p-12 transition-colors duration-500 min-h-screen">
    <div class="max-w-7xl mx-auto mt-16 md:mt-0">
      
      <header class="mb-12 text-center">
        <h1 class="font-dossier text-3xl md:text-5xl font-bold tracking-wider theme-heading transition-colors duration-500">
          [ MY REPERTOIRE ]
        </h1>
        <p class="font-dossier theme-subheading mt-2 transition-colors duration-500">INDEX OF COMPLETED PROJECTS IN THE PAST</p>
      </header>

      <!-- Stats Bar (Glassy) -->
      <div class="mb-12 p-6 glass-panel rounded-xl">
        <h2 class="font-dossier text-lg md:text-xl font-bold mb-4 theme-heading transition-colors duration-500">RESOURCE DISTRIBUTION</h2>
        
        <div class="h-3 flex w-full rounded-full overflow-hidden mb-4 bg-black/40 shadow-inner">
          <div 
            v-for="stat in calculatedStats.stats" 
            :key="stat.name"
            :class="stat.colorClass"
            :style="{ width: stat.percentage + '%' }"
            :title="`${stat.name}: ${stat.percentage}% (${stat.count} projects)`"
            class="transition-all duration-1000 ease-out hover:brightness-125"
          ></div>
        </div>

        <div class="flex flex-wrap gap-x-6 gap-y-3 text-sm font-dossier">
          <div v-for="stat in calculatedStats.stats" :key="stat.name" class="flex items-center theme-text transition-colors duration-500">
            <div :class="[stat.colorClass, 'w-3 h-3 rounded-sm mr-2 shadow-sm']"></div>
            <span>{{ stat.name }}</span>
            <span class="ml-1 opacity-60">[{{ stat.percentage }}%]</span>
          </div>
        </div>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="glass-card p-6 flex flex-col group"
        >
          <!-- Image Container -->
          <div class="h-44 bg-black/50 rounded-lg mb-6 overflow-hidden border border-gray-500/30 relative">
            <div class="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none mix-blend-overlay"></div>
            <img 
  v-if="project.imageUrl"
  :src="project.imageUrl" 
  :alt="`Screenshot of ${project.title}`" 
  class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
/>
            <div v-else class="w-full h-full flex items-center justify-center font-dossier text-gray-500">
              [ NO IMAGE DATA ]
            </div>
          </div>

          <h2 class="font-dossier text-xl font-bold mb-2 text-red-400 group-hover:text-red-300 transition-colors">
            {{ project.title }}
          </h2>
          
          <p class="text-sm flex-grow mb-6 theme-text opacity-90 leading-relaxed transition-colors duration-500">
            {{ project.description }}
          </p>

          <!-- Tech Tracks -->
          <div v-if="project.tracks && project.tracks.length > 0" class="flex flex-wrap gap-2 mb-6">
            <div v-for="track in project.tracks" :key="track" 
                 class="flex items-center text-xs font-mono px-2 py-1 rounded border border-gray-500/30 bg-black/10 theme-badge transition-colors duration-500">
              <div :class="[trackColors[track] || 'bg-gray-500', 'w-1.5 h-1.5 rounded-full mr-2']"></div>
              {{ track }}
            </div>
          </div>
          
          <!-- View Button -->
          <div class="mt-auto">
            <button class="w-full font-dossier text-sm py-2 px-4 rounded border border-red-500/50 text-red-400 bg-red-500/10 hover:bg-red-500/20 hover:border-red-400 transition-all duration-200">
              [ INITIATE VIEW ]
            </button>
          </div>
        </div>
      </div>

      <!-- Certificates -->
      <div class="mt-20 text-center pb-12"> 
        <h2 class="font-dossier text-2xl font-bold mb-6 theme-heading transition-colors duration-500">
          [ LOGGED CLEARANCES & CERTIFICATES ]
        </h2>
        
        <div class="max-w-xl mx-auto glass-panel p-6">
          <ul class="space-y-3 text-left font-sans theme-text transition-colors duration-500">
            <li class="flex items-start">
              <span class="text-yellow-500 mr-3 mt-1">▸</span>
              <span><strong>SQL Associate</strong> — Issued by DataCamp</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const trackColors = {
  'C++': 'bg-indigo-500',
  'QT': 'bg-pink-500',
  'Tailwind': 'bg-blue-400',
  'Javascript': 'bg-orange-500',
  'PostgreSQL': 'bg-yellow-400',
  'GDScript': 'bg-purple-500',
  'Vue': 'bg-emerald-500',
  'CSS': 'bg-blue-600',
  'Typescript': 'bg-blue-400'
};

const projects = ref([
  { 
    id: 1, 
    title: 'Project CleanUp', 
    description: 'A waste disposal tracker application as part of a project for CMSC21 Finals. Awarded 4th Best Project overall.',
    tracks: ['QT', 'C++'],
    imageUrl: '/clean_up.png'
  },
  { 
    id: 2, 
    title: 'i.skwelai', 
    description: 'A website generating educational roadmaps for schools in Cebu as a submission from Team M & Ems for the IBPAP Hack-It Challenge 2025. Helped present and pitch the final output.',
    tracks: ['Tailwind'],
    imageUrl: '/iskwelai.png'
  },
  { 
    id: 3, 
    title: 'LOOK! Productions', 
    description: 'An interactive website for LOOK! Productions, solely spearheaded by Sir Raphael Chamen in UP Cebu.',
    tracks: ['Tailwind', 'Javascript'],
    imageUrl: '/look_site.png'
  },
  { 
    id: 4, 
    title: 'Finding Dormy', 
    description: 'A matchmaking website for finding available dorms in Cebu built for the Cebu Hacktoberfest 2025 Hackathon. Partially finished.',
    tracks: ['Tailwind', 'PostgreSQL', 'Javascript'],
    imageUrl: '/findingdormy.png'
  },
  { 
    id: 5, 
    title: 'Fallasee', 
    description: 'An educational website that serves as your logic professor in your pocket. Built as a passion project over the Christmas break.',
    tracks: ['Tailwind', 'Javascript'],
    imageUrl: '/fallasee.png'
  },
  {
    id: 6,
    title: 'Crossroads of Us',
    description: 'An Exit 8–inspired 2D top-down game presented at UPCSG GameJam 2026 hosted by UPCSG by the team TheWinnerTakesItAllTheLoserStandingSmall.',
    tracks: ['GDScript'],
    imageUrl: '/gamejam.jpg'
  },
  {
    id: 7,
    title: 'Blind Spot',
    description: 'An offline-first, AI-powered platform that predicts localized power and connectivity failures during typhoons. It aims to function as a disaster resilience engine within Cebu City. Presented and pitched at Innovation Cup 2026 hosted by the team The Russters. Ranked top 15 among 50 entries.',
    tracks: ['Vue', 'CSS', 'Typescript'],
    imageUrl: '/innovationcup.jpg'
  }
]);

const calculatedStats = computed(() => {
    const usage = {};
    let totalTracks = 0;

    projects.value.forEach(project => {
        if (project.tracks) {
            project.tracks.forEach(track => {
                usage[track] = (usage[track] || 0) + 1;
                totalTracks++;
            });
        }
    });

    const statsArray = Object.keys(usage).map(track => ({
        name: track,
        count: usage[track],
        percentage: totalTracks > 0 ? ((usage[track] / totalTracks) * 100).toFixed(1) : 0,
        colorClass: trackColors[track] || 'bg-gray-500'
    }));

    statsArray.sort((a, b) => b.count - a.count);

    return { stats: statsArray, totalTracks };
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Inter:wght@400;500;700&display=swap');

.font-dossier { font-family: 'Special Elite', monospace; }
.font-sans { font-family: 'Inter', sans-serif; }

/* ---------- Light Mode Overrides ---------- */
:global(.light-mode) .theme-heading { color: #000000 !important; } /* Pure black */
:global(.light-mode) .theme-subheading { color: #1f2937 !important; } /* Very dark gray */
:global(.light-mode) .theme-text { color: #111827 !important; } /* Almost black */

/* Base Liquid Glass for Panels and Cards */
.glass-panel, .glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
}

/* Card Specifics */
.glass-card {
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease, border-color 0.4s ease, background 0.5s ease;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -10px rgba(220, 38, 38, 0.15), 0 0 20px rgba(220, 38, 38, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
}

/* ---------- Light Mode Overrides ---------- */
/* Using a broader selector so it catches the light mode class wherever you put it */
:global(.light-mode) .theme-heading { color: #111827 !important; }
:global(.light-mode) .theme-subheading { color: #4b5563 !important; }
:global(.light-mode) .theme-text { color: #374151 !important; }

:global(.light-mode) .glass-panel,
:global(.light-mode) .glass-card {
  background: rgba(245, 242, 235, 0.6); 
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.9);
  border-left: 1px solid rgba(255, 255, 255, 0.9);
}

:global(.light-mode) .glass-card {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
}

:global(.light-mode) .glass-card:hover {
  box-shadow: 0 20px 40px -10px rgba(220, 38, 38, 0.2);
}

:global(.light-mode) .theme-badge {
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.1);
  color: #1f2937 !important;
}
</style>