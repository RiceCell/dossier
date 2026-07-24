import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Stuffs from './pages/Extras.vue'
import Experience from './pages/Experience.vue'
import Stack from './pages/Stack.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/stuffs', component: Stuffs },
    { path: '/experience', component: Experience },
    { path: '/stack', component: Stack }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
