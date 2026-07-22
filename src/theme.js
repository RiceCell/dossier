import { ref } from 'vue'

export const isLightOn = ref(false)

export const toggleTheme = () => {
    isLightOn.value = !isLightOn.value

    if (isLightOn.value) {
        document.body.classList.add('project-light-mode')
    } else {
        document.body.classList.remove('project-light-mode')
    }
}
