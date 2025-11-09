<template>
  <div class="bg-white min-h-screen text-gray-800 font-sans p-6 md:p-12 transition-colors duration-500">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900 tracking-wider">
        My Repertoire
      </h1>

      <div class="mb-12 p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-inner">
        <h2 class="text-xl font-semibold mb-3 text-gray-700">Distribution</h2>
        
        <!-- Progress Bar -->
        <div class="h-2 flex w-full rounded-full overflow-hidden mb-3 shadow-md">
          <div 
            v-for="stat in calculatedStats.stats" 
            :key="stat.name"
            :class="stat.colorClass"
            :style="{ width: stat.percentage + '%' }"
            :title="`${stat.name}: ${stat.percentage}% (${stat.count} projects)`"
            class="transition-all duration-500 ease-out"
          ></div>
        </div>

        <!-- Legend -->
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <div v-for="stat in calculatedStats.stats" :key="stat.name" class="flex items-center text-gray-600">
            <div :class="[stat.colorClass, 'w-3 h-3 rounded-full mr-2']"></div>
            <span>{{ stat.name }}</span>
            <span class="ml-1 font-medium text-gray-900">{{ stat.percentage }}%</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Project card blueprint -->
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="
            bg-white 
            p-6 
            rounded-xl 
            shadow-xl 
            border border-gray-200
            transform 
            transition 
            duration-300 
            hover:shadow-2xl 
            hover:shadow-gray-300/60
            hover:scale-[1.02]
            flex flex-col
          "
        >

          <!-- PROJECT IMAGE BLOCK (Dynamic) -->
          <div class="h-40 bg-gray-100 rounded-lg mb-6 overflow-hidden">
            <!-- This part checks if the URL exists -->
            <img 
              v-if="project.imageUrl"
              :src="project.imageUrl" 
              :alt="`Screenshot of ${project.title}`" 
              class="w-full h-full object-cover transition duration-300 hover:scale-105"
            />
            <div v-else class="w-full h-full flex items-center justify-center border border-dashed border-gray-300">
            </div>
          </div>

          <!-- Content -->
          <h2 class="text-2xl font-bold mb-2 text-indigo-700">
            {{ project.title }}
          </h2>
          <p class="text-gray-600 text-sm flex-grow mb-4">
            {{ project.description }}
          </p>

          <div v-if="project.tracks && project.tracks.length > 0" class="flex flex-wrap gap-x-3 gap-y-1 mb-4">
            <div v-for="track in project.tracks" :key="track" class="flex items-center text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
              <div :class="[trackColors[track] || 'bg-gray-500', 'w-2 h-2 rounded-full mr-1']"></div>
              {{ track }}
            </div>
          </div>
          
          <div class="mt-4">
            <button class="
              bg-indigo-600 
              hover:bg-indigo-700 
              text-white 
              font-semibold 
              py-2 px-4 
              rounded-lg 
              transition 
              duration-200 
              shadow-lg 
              shadow-indigo-500/50
            ">
              View
            </button>
          </div>

        </div>
        
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';

const trackColors = {
  'C++': 'bg-indigo-600',
  'QT': 'bg-pink-600',
  'Tailwind': 'bg-blue-400',
  'Javascript': 'bg-orange-500',
  'PostgreSQL': 'bg-yellow-400',
  // To add more language soon plsplspls
};

// All projects here
const projects = ref([
  { 
    id: 1, 
    title: 'Project CleanUp', 
    description: 'A waste disposal tracker as part of a project for CMSC21 Finals. Awarded 4th Best Project overall.',
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
    title: 'Naani / Fallasee', 
    description: 'To be made passion project',
    tracks: ['kauyabon'] 
  },
]);

// Computed property to calculate overall track usage for the stats bar gpt slop hehe
const calculatedStats = computed(() => {
    const usage = {};
    let totalTracks = 0;

    // 1. Tallying
    projects.value.forEach(project => {
        if (project.tracks) {
            project.tracks.forEach(track => {
                usage[track] = (usage[track] || 0) + 1;
                totalTracks++;
            });
        }
    });

    // 2. Format into an array with percentages
    const statsArray = Object.keys(usage).map(track => ({
        name: track,
        count: usage[track],
        percentage: totalTracks > 0 ? ((usage[track] / totalTracks) * 100).toFixed(1) : 0,
        colorClass: trackColors[track] || 'bg-gray-500' // Use defined color or a fallback
    }));

    // Sort descending by usage count for the legend
    statsArray.sort((a, b) => b.count - a.count);

    return { stats: statsArray, totalTracks };
});
</script>