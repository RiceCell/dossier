<template>
  <nav class="sidebar-wrapper transition-colors duration-500 z-50" :class="{ 'light-mode': isLightOn }">
    
    <!-- Desktop Sidebar -->
    <div class="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 border-r px-8 py-12 sidebar-bg transition-colors duration-500">
      
      <!-- Title -->
      <RouterLink to="/" class="font-dossier text-2xl font-bold text-gray-100 theme-title hover:text-yellow-500 transition-colors tracking-wide block">
        My Dossier
      </RouterLink>
      <p class="font-dossier text-xs text-gray-400 theme-text opacity-70 mb-10 tracking-wide">
        Russel Niño Buno
      </p>

      <!-- Theme Toggle -->
      <button
        type="button"
        class="theme-switch mb-10"
        role="switch"
        :aria-checked="isLightOn"
        aria-label="Toggle light mode"
        @click="toggleTheme"
      >
        <span class="theme-switch-track">
          <span class="theme-switch-thumb">
            <svg v-if="isLightOn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
            </svg>
          </span>
        </span>
        <span class="font-dossier text-xs theme-text transition-colors">{{ isLightOn ? 'LIGHTS ON' : 'LIGHTS OFF' }}</span>
      </button>

      <!-- Navigation Links -->
      <div class="flex flex-col space-y-6 font-dossier text-[17px]">
        
        <RouterLink to="/projects" class="nav-link group flex items-center gap-4 text-gray-400 theme-text hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
          </svg>
          Projects
        </RouterLink>

          <RouterLink to="/" class="nav-link group flex items-center gap-4 text-gray-400 theme-text hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
          </svg>
          Experience
        </RouterLink>

        <RouterLink to="/stack" class="nav-link group flex items-center gap-4 text-gray-400 theme-text hover:text-white transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
    <rect x="4" y="4" width="16" height="4.5" rx="1.25" />
    <rect x="4" y="9.75" width="16" height="4.5" rx="1.25" />
    <rect x="4" y="15.5" width="16" height="4.5" rx="1.25" />
  </svg>
  Stack
</RouterLink>

        <RouterLink to="/stuffs" class="nav-link group flex items-center gap-4 text-gray-400 theme-text hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
          Extra
        </RouterLink>

      </div>

      <!-- Connect With Me -->
      <div class="mt-auto pt-6 border-t theme-border-light">
        <p class="font-dossier text-xs text-gray-400 theme-text opacity-60 mb-4 tracking-widest">
          Connect with me!
        </p>
        <div class="flex flex-col space-y-4 font-dossier text-sm">

          <a
            href="mailto:russelbaltazar.buno@gmail.com"
            class="nav-link group flex items-center gap-4 text-gray-400 theme-text hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Gmail
          </a>

          <a
            href="https://www.linkedin.com/in/russel-buno-234055287/"
            target="_blank"
            rel="noopener"
            class="nav-link group flex items-center gap-4 text-gray-400 theme-text hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 0v11.25C20.25 19.903 16.556 21.75 12 21.75s-8.25-1.847-8.25-4.125V6.375" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/RiceCell"
            target="_blank"
            rel="noopener"
            class="nav-link group flex items-center gap-4 text-gray-400 theme-text hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            GitHub
          </a>

        </div>
      </div>
    </div>

    <!-- Mobile Bottom Bar -->
    <div class="md:hidden fixed bottom-0 left-0 w-full h-16 border-t flex justify-around items-center px-4 sidebar-bg-mobile transition-colors duration-500">
      <RouterLink to="/projects" class="p-2 text-gray-400 theme-text hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" /></svg>
      </RouterLink>
      <RouterLink to="/stuffs" class="p-2 text-gray-400 theme-text hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
      </RouterLink>
      <RouterLink to="/contact" class="p-2 text-gray-400 theme-text hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
      </RouterLink>

      <button
        type="button"
        class="theme-switch theme-switch-mobile p-2"
        role="switch"
        :aria-checked="isLightOn"
        aria-label="Toggle light mode"
        @click="toggleTheme"
      >
        <span class="theme-switch-track">
          <span class="theme-switch-thumb">
            <svg v-if="isLightOn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
            </svg>
          </span>
        </span>
      </button>
    </div>

  </nav>
</template>

<script setup>
import { isLightOn, toggleTheme } from '../theme.js'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

.font-dossier { font-family: 'Special Elite', monospace; }

/* Base Dark Mode Styling - SOLID BLACK */
.sidebar-bg {
  background-color: #080808; 
  border-right-color: rgba(255, 255, 255, 0.1);
}

.sidebar-bg-mobile {
  background-color: #080808;
  border-top-color: rgba(255, 255, 255, 0.1);
}

.theme-border-light {
  border-color: rgba(255, 255, 255, 0.1);
}

/* Theme Toggle Switch */
.theme-switch {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
}

.theme-switch-track {
  position: relative;
  width: 42px;
  height: 22px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: background 0.3s ease, border-color 0.3s ease;
  flex-shrink: 0;
}

.theme-switch-thumb {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #cfc7b8;
  color: #3a352e;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), background 0.3s ease, color 0.3s ease;
}

.theme-switch[aria-checked="true"] .theme-switch-track {
  background: rgba(255, 216, 115, 0.25);
  border-color: rgba(255, 216, 115, 0.5);
}

.theme-switch[aria-checked="true"] .theme-switch-thumb {
  transform: translateX(20px);
  background: #ffd873;
  color: #7a5b18;
  box-shadow: 0 0 8px 1px rgba(255, 216, 115, 0.7);
}

.theme-switch-mobile {
  gap: 0;
}

/* Active Route Indicators */
.router-link-active.nav-link {
  color: #facc15; 
}
.router-link-active.nav-link svg {
  opacity: 1;
}

/* ---------- Light Mode Overrides ---------- */

/* Solid Light Mode Background matching your new cream color */
.light-mode .sidebar-bg {
  background-color: var(--light-bg-deep) !important; /* Slightly darker than page background for depth */
  border-right-color: var(--light-border) !important; 
}

.light-mode .sidebar-bg-mobile {
  background-color: var(--light-bg-deep) !important;
  border-top-color: var(--light-border) !important;
}

.light-mode .theme-border-light {
  border-color: var(--light-border) !important;
}

/* Force Text Colors */
.light-mode .theme-title { color: var(--light-text-dark) !important; }
.light-mode .theme-text { color: var(--light-text-gray) !important; }
.light-mode .theme-text:hover { color: var(--light-text-black) !important; }

.light-mode .router-link-active.nav-link {
  color: var(--light-text-black) !important;
  text-shadow: 0 0 0.6px currentColor, 0 0 0.6px currentColor;
}

.light-mode .theme-switch-track {
  background: rgba(0, 0, 0, 0.1) !important;
  border-color: rgba(0, 0, 0, 0.2) !important;
}

.light-mode .theme-switch[aria-checked="true"] .theme-switch-track {
  background: rgba(122, 91, 24, 0.15) !important;
  border-color: rgba(122, 91, 24, 0.35) !important;
}
</style>