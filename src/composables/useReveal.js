import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer = null

  function observe() {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    // Small delay to ensure DOM is painted
    setTimeout(observe, 100)
  })

  onUnmounted(() => observer?.disconnect())
}
