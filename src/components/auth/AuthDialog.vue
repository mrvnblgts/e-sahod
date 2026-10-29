<template>
  <q-dialog
    v-model="isOpen"
    transition-show="scale"
    transition-hide="scale"
    :maximized="$q.screen.lt.sm"
    @hide="onHide"
  >
    <q-card class="auth-dialog" :class="{ 'auth-dialog--register': mode === 'register' }">
      <section class="auth-dialog__aside" :style="asideStyle">
        <div class="auth-dialog__aside-inner">
          <router-link
            to="/"
            class="auth-dialog__brand"
            aria-label="E-Sahod - go to homepage"
            @click="close"
          >
            <BrandLogo light />
          </router-link>

          <div class="auth-dialog__aside-copy">
            <span class="lp-badge auth-dialog__badge">Barangay Payroll &amp; Analytics</span>
            <h2 class="auth-dialog__aside-title">Smarter payroll for your barangay.</h2>
            <p class="auth-dialog__aside-text">
              Manage personnel, honorariums, and payroll records while gaining automated insights from one secure dashboard.
            </p>
            <ul class="auth-dialog__points">
              <li v-for="point in points" :key="point.label">
                <q-icon :name="point.icon" aria-hidden="true" />
                <span>{{ point.label }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="auth-dialog__main">
        <q-btn
          class="auth-dialog__close"
          flat
          round
          dense
          icon="close"
          aria-label="Close authentication dialog"
          @click="close"
        />

        <div
          class="auth-dialog__form-wrap"
          :class="{ 'auth-dialog__form-wrap--wide': mode === 'register' }"
        >
          <div class="auth-dialog__mode" role="tablist" aria-label="Authentication mode">
            <button
              type="button"
              role="tab"
              class="auth-dialog__mode-btn"
              :class="{ 'is-active': mode === 'login' }"
              :aria-selected="mode === 'login'"
              @click="setMode('login')"
            >
              Sign in
            </button>
            <button
              type="button"
              role="tab"
              class="auth-dialog__mode-btn"
              :class="{ 'is-active': mode === 'register' }"
              :aria-selected="mode === 'register'"
              @click="setMode('register')"
            >
              Create account
            </button>
          </div>

          <h1 class="auth-dialog__title">{{ copy.title }}</h1>
          <p class="auth-dialog__sub">{{ copy.subtitle }}</p>

          <LoginForm v-if="mode === 'login'" :key="'login-' + formKey" />
          <RegisterForm v-else :key="'register-' + formKey" />
        </div>
      </section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuasar } from 'quasar'
import loginImage from '@/assets/images/login.jpg'
import BrandLogo from '@/components/landing/BrandLogo.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import { useAuthDialog } from '@/stores/authDialog'

const $q = useQuasar()
const authDialog = useAuthDialog()
const { mode } = storeToRefs(authDialog)

const formKey = ref(0)

const isOpen = computed({
  get: () => authDialog.isOpen,
  set: (value) => {
    authDialog.isOpen = value
  }
})

const asideStyle = {
  backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.18) 0%, rgba(15, 23, 42, 0.86) 100%), url(${loginImage})`
}

const points = [
  { icon: 'groups', label: 'Centralized personnel records' },
  { icon: 'analytics', label: 'Automated payroll analytics' },
  { icon: 'security', label: 'Secure access and audit logs' }
]

const copy = computed(() => {
  if (mode.value === 'register') {
    return {
      title: 'Create your account',
      subtitle: 'Request access to the E-Sahod payroll management system.'
    }
  }

  return {
    title: 'Welcome back',
    subtitle: 'Sign in to access the barangay payroll dashboard and analytics.'
  }
})

function close () {
  authDialog.close()
}

function setMode (nextMode) {
  authDialog.setMode(nextMode)
}

function onHide () {
  formKey.value += 1
}

watch(mode, () => {
  formKey.value += 1
})
</script>

<style scoped>
.auth-dialog {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  width: 920px;
  max-width: 92vw;
  max-height: 92vh;
  padding: 0;
  border-radius: var(--lp-radius-xl);
  overflow: hidden;
  background: #ffffff;
  box-shadow: var(--lp-shadow-xl);
}

.auth-dialog--register {
  width: 1000px;
}

.auth-dialog__aside {
  position: relative;
  background-size: cover;
  background-position: center;
  color: #ffffff;
  min-height: 580px;
  overflow: hidden;
}

.auth-dialog__aside-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  height: 100%;
  padding: 34px;
}

.auth-dialog__brand {
  align-self: flex-start;
  text-decoration: none;
  line-height: 0;
}

.auth-dialog__badge {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.28);
  color: #ffffff;
}

.auth-dialog__aside-title {
  margin: 16px 0 0;
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
  max-width: 18ch;
}

.auth-dialog__aside-text {
  margin: 12px 0 0;
  max-width: 34ch;
  font-size: 0.88rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
}

.auth-dialog__points {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
}

.auth-dialog__points li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
}

.auth-dialog__points .q-icon {
  font-size: 18px;
  color: #93c5fd;
}

.auth-dialog__main {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  padding: 40px;
  overflow-y: auto;
}

.auth-dialog__close {
  position: absolute;
  top: 14px;
  right: 14px;
  color: var(--lp-slate);
}

.auth-dialog__close:hover {
  color: var(--lp-ink);
  background: var(--lp-surface-muted);
}

.auth-dialog__form-wrap {
  width: 100%;
  max-width: 380px;
}

.auth-dialog__form-wrap--wide {
  max-width: 440px;
}

.auth-dialog__mode {
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
  padding: 4px;
  background: var(--lp-surface-muted);
  border: 1px solid var(--lp-border);
  border-radius: 12px;
}

.auth-dialog__mode-btn {
  flex: 1;
  padding: 8px 10px;
  border: 0;
  border-radius: 9px;
  background: none;
  font-family: var(--lp-font);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--lp-slate);
  cursor: pointer;
  transition: background-color 0.16s ease, color 0.16s ease, box-shadow 0.16s ease;
}

.auth-dialog__mode-btn:hover {
  color: var(--lp-primary);
}

.auth-dialog__mode-btn.is-active {
  background: #ffffff;
  color: var(--lp-primary);
  box-shadow: var(--lp-shadow-xs);
}

.auth-dialog__mode-btn:focus-visible {
  outline: 2px solid var(--lp-primary);
  outline-offset: 2px;
}

.auth-dialog__title {
  margin: 0;
  padding-block: 8px;
  font-size: 1.55rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--lp-ink);
}

.auth-dialog__sub {
  margin: 4px 0 18px;
  font-size: 0.8rem;
  line-height: 1.55;
  color: var(--lp-slate);
}

@media (min-width: 1024px) {
  .auth-dialog--register .auth-dialog__main {
    padding: 32px;
  }
}

@media (max-width: 900px) {
  .auth-dialog {
    grid-template-columns: minmax(0, 1fr);
    width: 460px;
    max-width: 94vw;
  }

  .auth-dialog__aside {
    display: none;
  }

  .auth-dialog__main {
    padding: 36px 28px;
  }
}

@media (max-width: 599px) {
  .auth-dialog {
    width: 100%;
    max-width: 100%;
    max-height: none;
    min-height: 100%;
    border-radius: 0;
  }

  .auth-dialog__main {
    align-items: flex-start;
    padding: 56px 20px 32px;
  }

  .auth-dialog__form-wrap {
    max-width: 420px;
  }
}
</style>
