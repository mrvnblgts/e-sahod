<template>
  <footer class="site-footer" id="about">
    <div class="lp-container">
      <div class="site-footer__top-divider"></div>
      <div class="site-footer__grid">
        <div class="site-footer__brand">
          <BrandLogo />
          <p class="site-footer__desc">
            A Barangay Payroll and Honorarium Management System with Automated Analytics
          </p>
          <div class="site-footer__social">
            <a href="#" class="site-footer__social-link" aria-label="Facebook" @click.prevent>
              <q-icon name="fab fa-facebook-f" aria-hidden="true" />
            </a>
            <a href="#" class="site-footer__social-link" aria-label="X (Twitter)" @click.prevent>
              <q-icon name="fab fa-x-twitter" aria-hidden="true" />
            </a>
            <a href="#" class="site-footer__social-link" aria-label="Instagram" @click.prevent>
              <q-icon name="fab fa-instagram" aria-hidden="true" />
            </a>
            <a href="#" class="site-footer__social-link" aria-label="LinkedIn" @click.prevent>
              <q-icon name="fab fa-linkedin-in" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div class="site-footer__col">
          <h4 class="site-footer__title">Quick links</h4>
          <ul class="site-footer__list">
            <li>
              <button type="button" @click="scrollToSection('home')">Home</button>
            </li>
            <li>
              <button type="button" @click="scrollToSection('features')">Features</button>
            </li>
            <li>
              <button type="button" @click="scrollToSection('about')">About</button>
            </li>
            <li>
              <button type="button" @click="authDialog.openDialog('login')">Log in</button>
            </li>
            <li>
              <button type="button" @click="authDialog.openDialog('register')">Get Started</button>
            </li>
          </ul>
        </div>

        <div class="site-footer__col">
          <h4 class="site-footer__title">Features</h4>
          <ul class="site-footer__list">
            <li v-for="feature in featureLinks" :key="feature">
              <button type="button" @click="scrollToSection('features')">{{ feature }}</button>
            </li>
          </ul>
        </div>

        <div class="site-footer__col">
          <h4 class="site-footer__title">Support</h4>
          <ul class="site-footer__list">
            <li v-for="link in supportLinks" :key="link">
              <button type="button">{{ link }}</button>
            </li>
          </ul>
        </div>

        <div class="site-footer__col site-footer__newsletter">
          <h4 class="site-footer__title">Stay updated</h4>
          <p class="site-footer__newsletter-desc">Get the latest updates and features from E-Sahod.</p>
          <form class="site-footer__subscribe" @submit.prevent="subscribe">
            <div class="site-footer__field">
              <q-icon name="mail" class="site-footer__field-icon" aria-hidden="true" />
              <input
                v-model="email"
                type="email"
                required
                placeholder="Enter your email"
                class="site-footer__input"
                aria-label="Email address"
                @input="subscribed = false"
              />
            </div>
            <button type="submit" class="lp-btn lp-btn--primary">
              Subscribe
              <q-icon name="arrow_forward" aria-hidden="true" />
            </button>
          </form>
          <p v-if="subscribed" class="site-footer__note">Thanks! You're subscribed.</p>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>&copy; 2026 E-Sahod. Barangay Payroll and Honorarium Management System.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import BrandLogo from './BrandLogo.vue'
import { useAuthDialog } from '@/stores/authDialog'

const authDialog = useAuthDialog()

const featureLinks = [
  'Personnel Management',
  'Payroll and Honorarium',
  'Automated Analytics',
  'AI-Powered Insights',
  'Secure & Reliable'
]

const supportLinks = [
  'Help Center',
  'FAQs',
  'Contact Us',
  'Privacy Policy',
  'Terms of Service'
]

const email = ref('')
const subscribed = ref(false)

function subscribe () {
  subscribed.value = true
  email.value = ''
}

function scrollToSection (id) {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.site-footer {
  background: var(--lp-bg);
  padding: 0;
}

.site-footer__top-divider {
  border-top: 1px solid var(--lp-border);
  margin-bottom: 72px;
}

.site-footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr 1.1fr 1.5fr;
  gap: 32px;
  padding-bottom: 56px;
}

.site-footer__brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
}

.site-footer__desc {
  font-size: 0.8rem;
  line-height: 1.65;
  color: var(--lp-slate);
  max-width: 220px;
  margin: 0;
}

.site-footer__social {
  display: flex;
  gap: 12px;
}

.site-footer__social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  font-size: 17px;
  line-height: 1;
  color: var(--lp-slate);
  background: var(--lp-surface);
  border: 1px solid var(--lp-border);
  text-decoration: none;
  transition: color 0.16s ease, background-color 0.16s ease, border-color 0.16s ease;
}

.site-footer__social-link:hover {
  color: var(--lp-primary);
  background: var(--lp-blue-50);
  border-color: var(--lp-blue-100);
}

.site-footer__social-link:focus-visible {
  outline: 2px solid var(--lp-primary);
  outline-offset: 2px;
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
  font-size: 0.8rem;
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

.site-footer__newsletter {
  max-width: 320px;
}

.site-footer__newsletter-desc {
  margin: -6px 0 14px;
  font-size: 0.8rem;
  line-height: 1.6;
  color: var(--lp-slate);
}

.site-footer__subscribe {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.site-footer__subscribe .q-icon {
  font-size: 16px;
}

.site-footer__field {
  position: relative;
  display: flex;
}

.site-footer__field-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 17px;
  color: var(--lp-muted);
  pointer-events: none;
}

.site-footer__input {
  width: 100%;
  padding: 11px 14px 11px 36px;
  font-family: var(--lp-font);
  font-size: 0.8rem;
  color: var(--lp-ink);
  background: var(--lp-surface);
  border: 1px solid var(--lp-border);
  border-radius: var(--lp-radius-sm);
  transition: border-color 0.16s ease, box-shadow 0.16s ease;
}

.site-footer__input::placeholder {
  color: var(--lp-muted);
}

.site-footer__input:focus {
  outline: none;
  border-color: var(--lp-primary);
  box-shadow: 0 0 0 3px var(--lp-blue-100);
}

.site-footer__note {
  margin: 10px 0 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--lp-primary);
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

@media (max-width: 1024px) {
  .site-footer__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }

  .site-footer__newsletter {
    grid-column: 1 / -1;
    max-width: none;
  }
}

@media (max-width: 640px) {
  .site-footer__grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>