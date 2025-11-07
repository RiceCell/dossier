import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Stuffs from './pages/Stuffs.vue'
import Contact from './pages/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/stuffs', component: Stuffs },
    { path: '/contact', component: Contact }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
