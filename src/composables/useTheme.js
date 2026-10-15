import { ref, watchEffect } from 'vue'

const isDark = ref(false)

let initialized = false

export function useTheme() {
  if (!initialized) {
    initialized = true
    const saved = localStorage.getItem('theme')
    isDark.value = saved
      ? saved === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches

    watchEffect(() => {
      document.documentElement.classList.toggle('dark', isDark.value)
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    })
  }

  const toggle = () => (isDark.value = !isDark.value)
  return { isDark, toggle }
}
