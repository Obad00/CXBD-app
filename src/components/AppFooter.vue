<template>
  <footer class="app-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <p class="footer-logo">CXBD</p>
        <p class="footer-tagline">Centre Expérimental en Business Design</p>
        <p class="footer-location">Dakar, Sénégal</p>
      </div>
      <nav class="footer-nav">
        <div class="footer-col">
          <p class="col-title">Organisation</p>
          <RouterLink to="/#vision">Vision</RouterLink>
          <RouterLink to="/#method">Méthode</RouterLink>
          <RouterLink to="/#governance">Gouvernance</RouterLink>
        </div>
        <div class="footer-col">
          <p class="col-title">Programmes</p>
          <RouterLink to="/programs#ideation">Ideation</RouterLink>
          <RouterLink to="/programs#poc-mvp">POC → MVP</RouterLink>
          <RouterLink to="/programs#acceleration">Accélération</RouterLink>
          <RouterLink to="/programs#deep-impact">Deep Impact</RouterLink>
        </div>
        <div class="footer-col">
          <p class="col-title">Contact</p>
          <a href="mailto:contact@cxbd.sn">contact@cxbd.sn</a>
          <RouterLink to="/apply">Candidater</RouterLink>
        </div>
      </nav>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© {{ year }} CXBD — Centre Expérimental en Business Design</p>
      <div class="footer-legal">
        <a href="#">Mentions légales</a>
        <a href="#">Confidentialité</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
  border-top: 1px solid var(--border);
  padding: 4rem 5rem 2.5rem;
  background: var(--bg);
  transition: background 0.3s, border-color 0.3s;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 3.5rem;
}
.footer-logo {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-bottom: 0.4rem;
}
.footer-tagline {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 300;
  margin-bottom: 0.2rem;
}
.footer-location {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 300;
  letter-spacing: 0.04em;
}
.footer-nav { display: flex; gap: 4rem; }
.footer-col { display: flex; flex-direction: column; gap: 0.55rem; }
.col-title {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.3rem;
}
.footer-col a {
  font-size: 0.84rem;
  color: var(--text-sub);
  text-decoration: none;
  font-weight: 300;
  transition: color 0.2s;
}
.footer-col a:hover { color: var(--text); }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  gap: 1rem;
}
.footer-copy { font-size: 0.75rem; color: var(--text-muted); }
.footer-legal { display: flex; gap: 2rem; flex-shrink: 0; }
.footer-legal a {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-legal a:hover { color: var(--text-sub); }

/* Tablet */
@media (max-width: 1024px) {
  .app-footer { padding: 3.5rem 3rem 2rem; }
  .footer-nav { gap: 2.5rem; }
}

/* Mobile */
@media (max-width: 768px) {
  .app-footer { padding: 3rem 1.4rem 2rem; }
  .footer-top {
    flex-direction: column;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .footer-nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
  .footer-legal { gap: 1.5rem; }
}

/* Small mobile */
@media (max-width: 400px) {
  .footer-nav { grid-template-columns: 1fr; gap: 1.8rem; }
}
</style>
