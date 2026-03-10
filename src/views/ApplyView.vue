<template>
  <div>
    <section class="apply-hero section-wrapper">
      <span class="section-label">Candidature</span>
      <h1 class="section-title">Rejoignez le<br>programme.</h1>
      <p class="apply-sub">
        Sélectionnez le programme adapté à votre stade de développement
        et soumettez votre candidature.
      </p>
    </section>
    <div class="divider"></div>

    <section class="apply-body section-wrapper">
      <div class="apply-form-wrap">
        <form class="apply-form" @submit.prevent="handleSubmit">
          <div class="form-section">
            <p class="form-section-title">Informations personnelles</p>
            <div class="form-row">
              <div class="form-group">
                <label>Prénom *</label>
                <input v-model="form.firstName" type="text" required placeholder="Votre prénom" />
              </div>
              <div class="form-group">
                <label>Nom *</label>
                <input v-model="form.lastName" type="text" required placeholder="Votre nom" />
              </div>
            </div>
            <div class="form-group">
              <label>Email *</label>
              <input v-model="form.email" type="email" required placeholder="votre@email.com" />
            </div>
            <div class="form-group">
              <label>Téléphone</label>
              <input v-model="form.phone" type="tel" placeholder="+221 XX XXX XX XX" />
            </div>
          </div>

          <div class="form-section">
            <p class="form-section-title">Votre projet</p>
            <div class="form-group">
              <label>Programme *</label>
              <select v-model="form.program" required>
                <option value="" disabled>Choisissez un programme</option>
                <option value="ideation">Ideation Lab</option>
                <option value="poc-mvp">POC → MVP</option>
                <option value="acceleration">Accélération</option>
                <option value="deep-impact">Deep Impact Track</option>
              </select>
            </div>
            <div class="form-group">
              <label>Nom du projet *</label>
              <input v-model="form.projectName" type="text" required placeholder="Nom de votre startup / projet" />
            </div>
            <div class="form-group">
              <label>Secteur *</label>
              <select v-model="form.sector" required>
                <option value="" disabled>Choisissez un secteur</option>
                <option>AgriTech</option>
                <option>EdTech</option>
                <option>HealthTech</option>
                <option>FinTech</option>
                <option>GovTech</option>
                <option>Climat & Énergie</option>
                <option>Industrie créative</option>
                <option>Manufacturing</option>
                <option>Autre</option>
              </select>
            </div>
            <div class="form-group">
              <label>Description du projet *</label>
              <textarea
                v-model="form.description"
                rows="5"
                required
                placeholder="Décrivez votre projet, le problème que vous résolvez et votre solution..."
              ></textarea>
            </div>
            <div class="form-group">
              <label>Motivation</label>
              <textarea
                v-model="form.motivation"
                rows="3"
                placeholder="Pourquoi le CXBD ? Qu'attendez-vous du programme ?"
              ></textarea>
            </div>
          </div>

          <div v-if="submitted" class="form-success">
            <span class="success-icon">✓</span>
            <div>
              <p class="success-title">Candidature envoyée !</p>
              <p class="success-sub">Nous reviendrons vers vous sous 5 jours ouvrés.</p>
            </div>
          </div>

          <button type="submit" class="btn-primary submit-btn" :disabled="submitting">
            {{ submitting ? 'Envoi en cours…' : 'Envoyer ma candidature →' }}
          </button>
        </form>
      </div>

      <aside class="apply-aside">
        <div class="aside-block">
          <p class="aside-title">Ce que vous obtenez</p>
          <ul class="aside-list">
            <li>Accompagnement stratégique sur mesure</li>
            <li>Accès au réseau CXBD (500+ contacts)</li>
            <li>Financement d'amorçage possible</li>
            <li>Mentorat par des experts sectoriels</li>
            <li>Exposition aux investisseurs</li>
          </ul>
        </div>
        <div class="aside-block">
          <p class="aside-title">Critères de sélection</p>
          <ul class="aside-list">
            <li>Alignement avec les priorités nationales</li>
            <li>Potentiel d'impact mesurable</li>
            <li>Équipe engagée et complémentaire</li>
            <li>Innovation ou différenciation claire</li>
          </ul>
        </div>
        <div class="aside-contact">
          <p class="aside-title">Questions ?</p>
          <a href="mailto:apply@cxbd.sn" class="aside-email">apply@cxbd.sn</a>
        </div>
      </aside>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  firstName: '', lastName: '', email: '', phone: '',
  program: '', projectName: '', sector: '', description: '', motivation: ''
})
const submitting = ref(false)
const submitted  = ref(false)

async function handleSubmit() {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1200))
  submitted.value  = true
  submitting.value = false
}
</script>

<style scoped>
.apply-hero { padding-top: 11rem; background: var(--bg); }
.apply-sub {
  margin-top: 1.5rem;
  color: var(--text-sub);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.75;
  max-width: 44ch;
}

.apply-body {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 5rem;
  align-items: start;
  background: var(--bg);
}

/* Form */
.apply-form-wrap { min-width: 0; }
.apply-form { display: flex; flex-direction: column; gap: 2.5rem; }
.form-section { display: flex; flex-direction: column; gap: 1.2rem; }
.form-section-title {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--border);
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-group { display: flex; flex-direction: column; gap: 0.4rem; }
.form-group label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.form-group input,
.form-group select,
.form-group textarea {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.85rem 1rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 300;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { border-color: var(--text-sub); }
.form-group select option { background: var(--bg); color: var(--text); }
.form-group textarea { resize: vertical; min-height: 100px; }

.form-success {
  display: flex; align-items: flex-start; gap: 1rem;
  background: var(--bg-alt); border: 1px solid var(--border);
  padding: 1.2rem;
}
.success-icon {
  font-size: 1.2rem; color: var(--text);
  width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border);
  flex-shrink: 0;
}
.success-title { font-family: var(--font-display); font-weight: 700; color: var(--text); margin-bottom: 0.2rem; }
.success-sub { font-size: 0.85rem; color: var(--text-muted); }

.submit-btn {
  align-self: flex-start;
  padding: 1rem 2rem;
}
.submit-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

/* Aside */
.apply-aside { position: sticky; top: 6rem; display: flex; flex-direction: column; gap: 1rem; }
.aside-block {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  padding: 1.5rem;
}
.aside-title {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.9rem;
}
.aside-list { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
.aside-list li {
  font-size: 0.84rem;
  color: var(--text-sub);
  font-weight: 300;
  padding-left: 1rem;
  position: relative;
}
.aside-list li::before {
  content: '→';
  position: absolute; left: 0;
  color: var(--text-muted);
  font-size: 0.75rem;
}
.aside-contact { background: var(--bg-alt); border: 1px solid var(--border); padding: 1.5rem; }
.aside-email {
  display: block; margin-top: 0.5rem;
  font-family: var(--font-display);
  font-size: 0.9rem; font-weight: 600;
  color: var(--text-sub); text-decoration: none;
  transition: color 0.2s;
}
.aside-email:hover { color: var(--text); }

/* Tablet */
@media (max-width: 1024px) {
  .apply-body { grid-template-columns: 1fr; gap: 3rem; }
  .apply-aside { position: static; order: -1; }
  .apply-hero { padding-top: 9rem; }
}

/* Mobile */
@media (max-width: 768px) {
  .apply-hero { padding-top: 8rem; }
  .apply-body { gap: 2.5rem; }
  .form-row { grid-template-columns: 1fr; gap: 1rem; }
  .submit-btn { width: 100%; text-align: center; justify-content: center; }
  .aside-block, .aside-contact { padding: 1.2rem; }
}
</style>
