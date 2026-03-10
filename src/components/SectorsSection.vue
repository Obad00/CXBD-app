<template>
  <section id="sectors" class="sectors section-wrapper">
    <div class="sectors-header reveal">
      <div>
        <span class="section-label">02 / Secteurs stratégiques</span>
        <h2 class="section-title">Alignement<br>national.</h2>
      </div>
      <p class="sectors-intro">
        Chaque secteur correspond aux axes prioritaires du Plan Sénégal Émergent.
      </p>
    </div>
    <div class="sectors-grid">
      <div
        v-for="(s, i) in sectors"
        :key="s.id"
        class="sector-card reveal"
        :class="`reveal-delay-${Math.min(i + 1, 6)}`"
      >
        <span class="sector-icon">{{ s.icon }}</span>
        <p class="sector-name">{{ s.name }}</p>
        <p class="sector-sub">{{ s.sub }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { SECTORS } from '@/data/index.js'
const sectors = SECTORS
</script>

<style scoped>
.sectors {
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.sectors-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
}
.sectors-intro {
  max-width: 26ch;
  color: var(--text-muted);
  font-size: 0.88rem;
  font-weight: 300;
  line-height: 1.7;
  text-align: right;
  flex-shrink: 0;
}
.sectors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
}
.sector-card {
  background: var(--bg-alt);
  padding: 2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: background 0.2s;
}
.sector-card:hover { background: var(--surface); }
.sector-card:hover .sector-icon { transform: scale(1.1) rotate(-5deg); }
.sector-icon {
  font-size: 1.6rem;
  line-height: 1;
  display: block;
  transition: transform 0.3s var(--ease-out-expo);
  margin-bottom: 0.3rem;
}
.sector-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--text);
  letter-spacing: -0.01em;
}
.sector-sub {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 300;
  line-height: 1.5;
}

/* Tablet */
@media (max-width: 1024px) {
  .sectors-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile */
@media (max-width: 768px) {
  .sectors-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .sectors-intro {
    text-align: left;
    max-width: 100%;
  }
  .sectors-grid { grid-template-columns: repeat(2, 1fr); }
  .sector-card { padding: 1.4rem 1.2rem; }
}

/* Small mobile */
@media (max-width: 400px) {
  .sectors-grid { grid-template-columns: 1fr; }
}
</style>
