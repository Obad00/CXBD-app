<template>
  <section id="vision" class="vision section-wrapper">
    <div class="vision-left reveal">
      <span class="section-label">01 / Vision & Mission</span>
      <h2 class="section-title">Transformer.<br>Innover.<br>Aligner.</h2>
      <p class="vision-text">
        Transformer les idées sénégalaises en entreprises viables, innovantes
        et stratégiquement alignées avec les besoins de l'État du Sénégal.
        Notre ambition : une nouvelle génération d'entrepreneurs capables de
        résoudre les défis nationaux.
      </p>
    </div>
    <div class="vision-right reveal reveal-delay-2">
      <span class="section-label">Nos piliers</span>
      <div class="pillars">
        <div v-for="(p, i) in pillars" :key="p.id" class="pillar">
          <span class="pillar-num">0{{ i + 1 }}</span>
          <div>
            <p class="pillar-title">{{ p.title }}</p>
            <p class="pillar-desc">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PILLARS } from '@/data/index.js'
const pillars = PILLARS
</script>

<style scoped>
.vision {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
  background: var(--bg);
}
.vision-text {
  margin-top: 1.8rem;
  color: var(--text-sub);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.85;
}
.pillars { display: flex; flex-direction: column; }
.pillar {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  padding: 1.4rem 0;
  border-top: 1px solid var(--border);
}
.pillar:last-child { border-bottom: 1px solid var(--border); }
.pillar:hover .pillar-title { color: var(--text); }
.pillar-num {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--text-muted);
  min-width: 22px;
  padding-top: 0.2rem;
  letter-spacing: 0.06em;
  flex-shrink: 0;
}
.pillar-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-sub);
  margin-bottom: 0.3rem;
  letter-spacing: -0.01em;
  transition: color 0.2s;
}
.pillar-desc {
  color: var(--text-muted);
  font-size: 0.84rem;
  font-weight: 300;
  line-height: 1.65;
}

/* Tablet */
@media (max-width: 1024px) {
  .vision { gap: 4rem; }
}

/* Mobile */
@media (max-width: 768px) {
  .vision {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .pillar { padding: 1.2rem 0; }
}
</style>
