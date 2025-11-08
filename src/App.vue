<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar v-if="$route.path !== '/'" />
    <RouterView />
  </div>
</template>

