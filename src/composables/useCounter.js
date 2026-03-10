// composables/useCounter.js — animated stat counters
import { ref, onMounted } from 'vue'

export function useCounter(targets, options = {}) {
  const { duration = 2000, delay = 0, easing = (t) => 1 - Math.pow(1 - t, 4) } = options

  const values = ref(targets.map(() => 0))
  let hasStarted = false

  function formatNum(n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'K'
    return Math.round(n).toString()
  }

  function start() {
    if (hasStarted) return
    hasStarted = true

    setTimeout(() => {
      const startTime = performance.now()

      function step(ts) {
        const progress = Math.min((ts - startTime) / duration, 1)
        const eased = easing(progress)
        values.value = targets.map((t) => formatNum(t * eased))
        if (progress < 1) requestAnimationFrame(step)
      }

      requestAnimationFrame(step)
    }, delay)
  }

  function observeElement(el) {
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start()
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
  }

  return { values, observeElement }
}
