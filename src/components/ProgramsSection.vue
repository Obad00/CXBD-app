<template>
  <section id="programs" class="section-wrapper">
    <div class="programs-header reveal">
      <span class="section-label">04 / Programmes</span>
      <h2 class="section-title">Four paths<br>to scale.</h2>
    </div>
    <div class="programs-grid">
      <RouterLink
        v-for="(prog, i) in programs"
        :key="prog.id"
        :to="`/programs#${prog.id}`"
        class="program-card reveal"
        :class="`reveal-delay-${i + 1}`"
      >
        <div class="card-top">
          <span class="prog-num">{{ prog.num }}</span>
          <span class="prog-icon">{{ prog.icon }}</span>
        </div>
        <p class="prog-title">{{ prog.title }}</p>
        <p class="prog-desc">{{ prog.desc }}</p>
        <div class="prog-tags">
          <span v-for="tag in prog.tags" :key="tag" class="prog-tag">{{ tag }}</span>
        </div>
        <span class="prog-cta">Voir le programme →</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { PROGRAMS } from '@/data/index.js'
const programs = PROGRAMS
</script>

<style scoped>
.programs-header { margin-bottom: 2.5rem; }

.programs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--border);
}

.program-card {
  background: var(--bg);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  transition: background 0.25s;
  min-height: 280px;
}
.program-card:hover { background: var(--bg-alt); }
.program-card:hover .prog-cta { color: var(--text); }

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}
.prog-num {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text);
  opacity: 0.05;
  line-height: 1;
  letter-spacing: -0.05em;
  user-select: none;
}
.prog-icon { font-size: 1.8rem; line-height: 1; }

.prog-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--text);
}
.prog-desc {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 300;
  line-height: 1.75;
  flex: 1;
}
.prog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.prog-tag {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  border: 1px solid var(--border);
  padding: 0.25rem 0.6rem;
}
.prog-cta {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-top: 0.5rem;
  transition: color 0.2s;
}

/* Tablet */
@media (max-width: 1024px) {
  .program-card { padding: 2rem; }
}

/* Mobile — stack to single column */
@media (max-width: 768px) {
  .programs-grid {
    grid-template-columns: 1fr;
    gap: 1px;
  }
  .program-card {
    padding: 1.8rem 1.4rem;
    min-height: auto;
  }
  .prog-num { font-size: 2.5rem; }
  .prog-title { font-size: 1.2rem; }
}
</style>
