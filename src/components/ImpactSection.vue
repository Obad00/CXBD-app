<template>
  <section id="impact" class="section-wrapper impact-section" ref="sectionEl">
    <div class="impact-header reveal">
      <span class="section-label">06 / Objectifs d'impact — 5 ans</span>
      <h2 class="section-title">Des chiffres<br>concrets.</h2>
    </div>
    <div class="stats-grid">
      <div
        v-for="(stat, i) in stats"
        :key="i"
        class="stat-card reveal"
        :class="`reveal-delay-${Math.min(i + 1, 6)}`"
      >
        <div class="stat-num">
          <span class="stat-val">{{ animated[i] }}</span>
          <span class="stat-suffix">{{ stat.suffix }}</span>
        </div>
        <p class="stat-label">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { STATS } from '@/data/index.js'

const stats = STATS
const sectionEl = ref(null)
const animated = ref(stats.map(() => '0'))
let started = false, obs = null

function format(n) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace('.0', '') + 'K' : Math.round(n).toString()
}

function run() {
  if (started) return
  started = true
  const dur = 2000, start = performance.now()
  const ease = t => 1 - Math.pow(1 - t, 4)
  function step(ts) {
    const p = Math.min((ts - start) / dur, 1)
    animated.value = stats.map(s => format(s.num * ease(p)))
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { run(); obs.disconnect() }
  }, { threshold: 0.2 })
  if (sectionEl.value) obs.observe(sectionEl.value)
})
onUnmounted(() => obs?.disconnect())
</script>

<style scoped>
.impact-section { background: var(--bg); }
.impact-header { margin-bottom: 3rem; }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
}

.stat-card {
  background: var(--bg);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: background 0.2s;
}
.stat-card:hover { background: var(--bg-alt); }

.stat-num {
  display: flex;
  align-items: baseline;
  gap: 0.05rem;
  line-height: 1;
}
.stat-val {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 4vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--text);
}
.stat-suffix {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-muted);
}
.stat-label {
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 0.3rem;
  line-height: 1.4;
}

/* Tablet */
@media (max-width: 1024px) {
  .stats-grid { grid-template-columns: repeat(3, 1fr); }
  .stat-card { padding: 2rem 1.5rem; }
}

/* Mobile */
@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .stat-card { padding: 1.8rem 1.2rem; }
  .stat-val { font-size: clamp(2rem, 8vw, 3rem); }
}

/* Small */
@media (max-width: 400px) {
  .stats-grid { grid-template-columns: 1fr 1fr; }
}
</style>
