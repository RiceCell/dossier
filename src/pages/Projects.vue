<template>
  <div class = " bg-white min-h-screen text-gray-800 font-sans p-6 md:p-12 transition-colors duration-1000">
    <div class = "max-w-7xl mx-auto">
      <h1 class = "text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900 tracking-wider">
        My Repertoire (add face in view soon)
      </h1>
      <div class = "mb-12 p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-inner">
        <h2 class ="text-xl font-semibold mb-3 text-gray-700"> Distribution</h2>
        <!-- Progress bar here-->
        <div class = "h-2 flex w-full rounded-full overflow-hidden mb-3 shadow-md">
          <div
            v-for="stat in calculatedStats.stats"
            :key ="stat.name"
            :class="stat.colorClass"
            :style="{width: stat.percentage + '%' }"
            :title="`${stat.name}: ${stat.percentage}% (${stat.count} projects)`"
            class = "transition-all duration-500 ease-out"
            ></div>
        </div>


      </div>


    </div>
  </div>



</template>