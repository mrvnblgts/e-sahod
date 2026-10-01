<template>
  <header class="lp-nav">
    <div class="lp-container lp-nav__inner">
      <router-link to="/" class="lp-nav__brand" aria-label="E-Sahod - go to homepage">
        <BrandLogo />
      </router-link>

      <nav class="lp-nav__links" aria-label="Primary navigation">
        <button
          v-for="item in navItems"
          :key="item.id"
          type="button"
          class="lp-nav__link"
          @click="scrollToSection(item.id)"
        >
          {{ item.label }}
        </button>
      </nav>

      <div class="lp-nav__actions">
        <button type="button" class="lp-nav__login" @click="go('/login')">
          Login
        </button>
        <button type="button" class="lp-btn lp-btn--primary lp-nav__cta" @click="go('/register')">
          <q-icon name="person" aria-hidden="true" />
          Get Started
        </button>

        <q-btn
          class="lp-nav__burger"
          flat
          round
          dense
          icon="menu"
          aria-label="Open navigation menu"
        >
          <q-menu
            class="lp-nav__menu"
            anchor="bottom right"
            self="top right"
            fit
          >
            <div class="lp-nav__menu-inner">
              <button
                v-for="item in navItems"
                :key="'m-' + item.id"
                type="button"
                class="lp-nav__menu-link"
                v-close-popup
                @click="scrollToSection(item.id)"
              >
                {{ item.label }}
              </button>
              <div class="lp-nav__menu-sep" aria-hidden="true"></div>
              <button
                type="button"
                class="lp-nav__menu-link lp-nav__menu-link--login"
                v-close-popup
                @click="go('/login')"
              >
                Login
              </button>
              <button
                type="button"
                class="lp-btn lp-btn--primary lp-nav__menu-cta"
                v-close-popup
                @click="go('/register')"
              >
                <q-icon name="person" aria-hidden="true" />
                Get Started
              </button>
            </div>
          </q-menu>
        </q-btn>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BrandLogo from './BrandLogo.vue'

const router = useRouter()

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'about', label: 'About' }
]

function scrollToSection (id) {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function go (path) {
  router.push(path)
}
</script>

<style scoped>
.lp-nav {
  position: sticky;
  top: 0;
  z-index: 60;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--lp-border);
}

.lp-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 76px;
}

.lp-nav__brand {
  text-decoration: none;
  line-height: 0;
  flex-shrink: 0;
}

.lp-nav__links {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-inline: auto;
}

.lp-nav__link {
  background: none;
  border: 0;
  padding: 8px 14px;
  font-family: var(--lp-font);
  font-size: 13px; /* Original: 15px */
  font-weight: 500;
  color: var(--lp-slate);
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.16s ease, background-color 0.16s ease;
}

.lp-nav__link:hover {
  color: var(--lp-primary);
  background: var(--lp-blue-50);
}

.lp-nav__link:focus-visible,
.lp-nav__login:focus-visible {
  outline: 2px solid var(--lp-primary);
  outline-offset: 2px;
}

.lp-nav__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lp-nav__login {
  background: none;
  border: 0;
  font-family: var(--lp-font);
  font-size: 13px; /*15px */
  font-weight: 600;
  color: var(--lp-primary);
  padding: 8px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.16s ease, background-color 0.16s ease;
}

.lp-nav__login:hover {
  background: var(--lp-blue-50);
}

.lp-nav__cta {
  padding: 10px 20px;
  font-size: 13px; /*14 */
}

.lp-nav__cta .q-icon,
.lp-nav__menu-cta .q-icon {
  font-size: 17px;
}

.lp-nav__burger {
  display: none;
  color: var(--lp-ink);
}

.lp-nav__menu {
  border-radius: var(--lp-radius-md);
  box-shadow: var(--lp-shadow-lg);
  border: 1px solid var(--lp-border);
  background: #ffffff;
  overflow: hidden;
}

.lp-nav__menu-inner {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
}

.lp-nav__menu-link {
  text-align: left;
  background: none;
  border: 0;
  font-family: var(--lp-font);
  font-size: 15px;
  font-weight: 500;
  color: var(--lp-ink);
  padding: 12px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.16s ease, color 0.16s ease;
}

.lp-nav__menu-link:hover {
  background: var(--lp-blue-50);
  color: var(--lp-primary);
}

.lp-nav__menu-link--login {
  color: var(--lp-primary);
}

.lp-nav__menu-link--login:hover {
  color: var(--lp-primary);
}

.lp-nav__menu-sep {
  height: 1px;
  background: var(--lp-border);
  margin: 6px 4px;
}

.lp-nav__menu-cta {
  margin-top: 4px;
  justify-content: center;
  width: 100%;
}

@media (max-width: 900px) {
  .lp-nav__links {
    display: none;
  }

  .lp-nav__burger {
    display: inline-flex;
  }

  .lp-nav__login,
  .lp-nav__cta {
    display: none;
  }
}
</style>