<template>
  <footer class="site-footer" id="about">
    <div class="lp-container">
      <div class="site-footer__grid">
        <div class="site-footer__brand">
          <BrandLogo />
          <p class="site-footer__desc">
            A web-based system for managing barangay personnel, compensation, honorariums, payroll, deductions, reports, and analytics.
          </p>
        </div>

        <div class="site-footer__col">
          <h4 class="site-footer__title">Product</h4>
          <ul class="site-footer__list">
            <li>
              <button type="button" @click="scrollToSection('features')">Features</button>
            </li>
            <li>
              <router-link to="/login">Sign in</router-link>
            </li>
            <li>
              <router-link to="/register">Get started</router-link>
            </li>
          </ul>
        </div>

        <div class="site-footer__col">
          <h4 class="site-footer__title">About</h4>
          <p class="site-footer__about">
            E-Sahod helps authorized barangay personnel manage payroll and honorarium records accurately, transparently, and securely.
          </p>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>&copy; 2026 E-Sahod — Barangay Payroll and Honorarium Management System.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import BrandLogo from './BrandLogo.vue'

function scrollToSection (id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.site-footer {
  background: #ffffff;
  border-top: 1px solid var(--lp-border);
  padding: 72px 0 0;
}

.site-footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr;
  gap: 48px;
  padding-bottom: 56px;
}

.site-footer__brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
}

.site-footer__desc {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--lp-slate);
  max-width: 340px;
  margin: 0;
}

.site-footer__title {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--lp-ink);
  margin: 0 0 18px;
}

.site-footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.site-footer__list button,
.site-footer__list a {
  background: none;
  border: 0;
  padding: 0;
  font-family: var(--lp-font);
  font-size: 0.95rem;
  color: var(--lp-slate);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.16s ease;
}

.site-footer__list button:hover,
.site-footer__list a:hover {
  color: var(--lp-primary);
}

.site-footer__list button:focus-visible {
  outline: 2px solid var(--lp-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

.site-footer__about {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--lp-slate);
  margin: 0;
}

.site-footer__bottom {
  border-top: 1px solid var(--lp-border);
  padding: 22px 0;
}

.site-footer__bottom p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--lp-muted);
  text-align: center;
}

@media (max-width: 768px) {
  .site-footer__grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>