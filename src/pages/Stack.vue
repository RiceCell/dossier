<template>
  <div class="stack-shell font-sans md:ml-64 p-6 md:p-12 transition-colors duration-500 min-h-screen" :class="{ 'light-mode': isLightOn }">
    <div class="max-w-5xl mx-auto mt-16 md:mt-0">

      <header class="mb-14">
        <h1 class="font-dossier text-3xl md:text-5xl font-bold tracking-wider text-gray-100 theme-heading transition-colors duration-500">
          [ TECH STACK ]
        </h1>
        <p class="font-dossier text-gray-400 theme-subheading mt-2 transition-colors duration-500">
          TOOLS, LANGUAGES & PLATFORMS I REACH FOR
        </p>
      </header>

      <section v-for="category in stack" :key="category.name" class="mb-12">
        <h2 class="category-heading font-dossier text-sm tracking-widest mb-4 pb-2 border-b theme-border transition-colors duration-500"
            :style="{ color: category.color }">
          {{ category.name }}
        </h2>

        <div class="flex flex-wrap gap-3">
          <span
            v-for="tool in category.tools"
            :key="tool"
            class="badge font-mono text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-md transition-all duration-200 hover:-translate-y-0.5"
            :style="{ 
              color: category.color, 
              borderColor: category.color + '55',
              backgroundColor: category.color + '14'
            }"
          >
            {{ tool }}
          </span>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { isLightOn } from '../theme.js';

const stack = [
  {
    name: 'LANGUAGES',
    color: '#60a5fa',
    tools: ['C', 'C++', 'JavaScript', 'Kotlin', 'LaTeX', 'Haskell', 'Python', 'R', 'TypeScript', 'Markdown']
  },
  {
    name: 'FRAMEWORKS & RUNTIME',
    color: '#c084fc',
    tools: ['Vercel', 'Node.js', 'Vite', 'Vue.js', 'React']
  },
  {
    name: 'DATABASES',
    color: '#34d399',
    tools: ['MySQL', 'Postgres', 'SQLite', 'Supabase']
  },
  {
    name: 'DATA & ML',
    color: '#fb923c',
    tools: ['Matplotlib', 'NumPy', 'Pandas', 'Scikit-learn']
  },
  {
    name: 'DESIGN',
    color: '#f472b6',
    tools: ['Canva']
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Inter:wght@400;500;700&display=swap');

.font-dossier { font-family: 'Special Elite', monospace; }
.font-sans { font-family: 'Inter', sans-serif; }

.stack-shell {
  background-color: #000000;
  color: #d1d5db;
}

.badge {
  border-width: 1px;
  border-style: solid;
}

/* ---------- LIGHT MODE LOCAL OVERRIDES ---------- */

.stack-shell.light-mode {
  background-color: #c7bea9;
}

.light-mode .theme-heading {
  color: #000000 !important;
}

.light-mode .theme-subheading {
  color: #1f2937 !important;
}

.light-mode .theme-border {
  border-color: #a89d87 !important;
}

.light-mode .category-heading {
  color: #000000 !important;
}

.light-mode .badge {
  color: #000000 !important;
}
</style>