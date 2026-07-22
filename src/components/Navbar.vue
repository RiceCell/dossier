<template>
  <nav class="sidebar-wrapper transition-colors duration-500 z-50">
    
    <!-- Desktop Sidebar -->
    <div class="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 border-r border-white/10 px-8 py-12 sidebar-bg transition-colors duration-500">
      
      <!-- Title -->
      <RouterLink to="/" class="font-dossier text-2xl font-bold text-gray-100 theme-title hover:text-yellow-500 transition-colors mb-16 tracking-wide">
        My Dossier
      </RouterLink>

      <!-- Navigation Links -->
      <div class="flex flex-col space-y-6 font-dossier text-[17px]">
        
        <RouterLink to="/projects" class="nav-link group flex items-center gap-4 text-gray-400 theme-text hover:text-white transition-colors">
          <!-- Folder Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
          </svg>
          Projects
        </RouterLink>

        <RouterLink to="/stuffs" class="nav-link group flex items-center gap-4 text-gray-400 theme-text hover:text-white transition-colors">
          <!-- Archive/Box Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
          Stuffs
        </RouterLink>

        <RouterLink to="/contact" class="nav-link group flex items-center gap-4 text-gray-400 theme-text hover:text-white transition-colors">
          <!-- Envelope/Mail Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Contact
        </RouterLink>

      </div>
    </div>

    <!-- Mobile Bottom Bar (Adapts so it doesn't break on phones) -->
    <div class="md:hidden fixed bottom-0 left-0 w-full h-16 border-t border-white/10 flex justify-around items-center px-4 backdrop-blur-lg bg-black/60 sidebar-bg-mobile transition-colors duration-500">
      <RouterLink to="/projects" class="p-2 text-gray-400 theme-text hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" /></svg>
      </RouterLink>
      <RouterLink to="/stuffs" class="p-2 text-gray-400 theme-text hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
      </RouterLink>
      <RouterLink to="/contact" class="p-2 text-gray-400 theme-text hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
      </RouterLink>
    </div>

  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

.font-dossier { font-family: 'Special Elite', monospace; }

/* Base Dark Mode Styling */
.sidebar-bg {
  /* Gives a slight separation from the deep black background */
  background: rgba(15, 15, 15, 0.4);
  backdrop-filter: blur(12px);
}

/* Active Route Indicators */
.router-link-active.nav-link {
  color: #facc15; /* Yellow highlight for active tab */
}
.router-link-active.nav-link svg {
  opacity: 1;
}

/* ---------- Light Mode Overrides ---------- */

/* Change the border to a darker gray to match the image when in light mode */
:global(body.light-mode) .sidebar-bg {
  background: rgba(240, 237, 230, 0.5); /* Dirty white blend */
  border-right-color: #d1d5db; /* Light gray border */
}

:global(body.light-mode) .sidebar-bg-mobile {
  background: rgba(240, 237, 230, 0.9);
  border-top-color: #d1d5db;
}

/* Text colors for light mode */
:global(body.light-mode) .theme-title { color: #111827; }
:global(body.light-mode) .theme-text { color: #4b5563; }
:global(body.light-mode) .theme-text:hover { color: #000000; }

/* Active state for light mode */
:global(body.light-mode) .router-link-active.nav-link {
  color: #000000;
  font-weight: bold;
}
</style>