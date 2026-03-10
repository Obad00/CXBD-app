<template>
  <section class="cta-section">
    <p class="cta-label reveal">Centre Expérimental en Business Design — Dakar, Sénégal</p>
    <h2 class="cta-headline reveal reveal-delay-1">
      <span>Design.</span>
      <span>Experiment.</span>
      <span class="dim">Transform.</span>
    </h2>
    <p class="cta-sub reveal reveal-delay-2">
      A national laboratory for entrepreneurial experimentation serving Senegal's future.
    </p>
    <div class="cta-actions reveal reveal-delay-3">
      <RouterLink to="/apply" class="btn-primary">Apply Now →</RouterLink>
      <a href="mailto:contact@cxbd.sn" class="btn-ghost">Contact us</a>
    </div>
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <span v-for="n in 8" :key="n">
          CXBD &nbsp;·&nbsp; AgriTech &nbsp;·&nbsp; FinTech &nbsp;·&nbsp; GovTech &nbsp;·&nbsp;
          HealthTech &nbsp;·&nbsp; EdTech &nbsp;·&nbsp; Climate &nbsp;·&nbsp;
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 8rem 2rem 6rem;
  background: var(--bg);
}

.cta-label {
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.cta-headline {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 10vw, 10rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.045em;
  margin-bottom: 2.5rem;
}
.cta-headline span { display: block; color: var(--text); }
.cta-headline .dim { color: var(--text-muted); }

.cta-sub {
  max-width: 40ch;
  color: var(--text-sub);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.75;
  margin-bottom: 2.5rem;
}

.cta-actions {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
}

.marquee {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  overflow: hidden;
  padding: 1rem 0;
  border-top: 1px solid var(--border);
}
.marquee-track {
  display: flex;
  white-space: nowrap;
  animation: marquee 28s linear infinite;
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* Mobile */
@media (max-width: 768px) {
  .cta-section {
    min-height: auto;
    padding: 6rem 1.4rem 5rem;
  }
  .cta-headline { font-size: clamp(3rem, 13vw, 5rem); margin-bottom: 1.8rem; }
  .cta-actions {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }
  .cta-actions a { width: 100%; text-align: center; justify-content: center; }
  .cta-sub { font-size: 0.9rem; }
}
</style>
