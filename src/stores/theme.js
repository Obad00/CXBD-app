import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // Default: light mode
  const isDark = ref(false)

  // Init from localStorage on first load
  function init() {
    const saved = localStorage.getItem('cxbd-theme')
    if (saved === 'dark') {
      isDark.value = true
      document.documentElement.classList.add('dark')
    } else {
      isDark.value = false
      document.documentElement.classList.remove('dark')
    }
  }

  function toggle() {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('cxbd-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('cxbd-theme', 'light')
    }
  }

  return { isDark, init, toggle }
})
