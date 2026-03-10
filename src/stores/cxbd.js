import { defineStore } from 'pinia'
import { ref } from 'vue'
import { PROGRAMS, STATS, SECTORS } from '@/data/index.js'
import { programsApi, statsApi } from '@/services/api.js'

export const useCxbdStore = defineStore('cxbd', () => {
  const programs = ref(PROGRAMS)   // defaults to static
  const stats    = ref(STATS)
  const sectors  = ref(SECTORS)
  const loading  = ref(false)
  const error    = ref(null)

  // Fetch programs from backend (call when backend is ready)
  async function fetchPrograms() {
    loading.value = true
    try {
      const data = await programsApi.getAll()
      programs.value = data
    } catch (e) {
      console.warn('Using static programs data:', e.message)
      // keeps static fallback
    } finally {
      loading.value = false
    }
  }

  async function fetchStats() {
    try {
      const data = await statsApi.getImpact()
      stats.value = data
    } catch {
      // keeps static fallback
    }
  }

  return { programs, stats, sectors, loading, error, fetchPrograms, fetchStats }
})
