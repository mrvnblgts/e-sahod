<template>
  <div class="auth">
    <div class="lp-container auth__inner">
      <router-link to="/" class="auth__brand" aria-label="E-Sahod - go to homepage">
        <BrandLogo />
      </router-link>

      <div class="auth__card">
        <h1 class="auth__title">{{ title }}</h1>
        <p class="auth__sub">{{ subtitle }}</p>

        <slot name="form"></slot>

        <p v-if="note" class="auth__note">{{ note }}</p>

        <router-link v-if="altLink" :to="altLink" class="auth__alt">
          {{ altLabel }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import BrandLogo from '@/components/landing/BrandLogo.vue'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  note: { type: String, default: '' },
  altLink: { type: String, default: '' },
  altLabel: { type: String, default: '' }
})
</script>

<style scoped>
.auth {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(800px 420px at 90% 0%, rgba(219, 234, 254, 0.8) 0%, rgba(239, 246, 255, 0) 60%),
    var(--lp-bg);
  padding: 48px 0;
}

.auth__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth__brand {
  text-decoration: none;
  line-height: 0;
  margin-bottom: 30px;
}

.auth__card {
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border: 1px solid var(--lp-border);
  border-radius: var(--lp-radius-lg);
  box-shadow: var(--lp-shadow-lg);
  padding: 36px;
}

.auth__title {
  font-size: 1.55rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--lp-ink);
  margin: 0;
}

.auth__sub {
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--lp-slate);
  margin: 8px 0 26px;
}

.auth__note {
  margin: 18px 0 0;
  font-size: 0.83rem;
  line-height: 1.55;
  color: var(--lp-muted);
  background: var(--lp-surface-muted);
  border: 1px solid var(--lp-border);
  border-radius: 10px;
  padding: 10px 12px;
}

.auth__alt {
  display: inline-block;
  margin-top: 18px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--lp-primary);
  text-decoration: none;
}

.auth__alt:hover {
  color: var(--lp-primary-strong);
  text-decoration: underline;
}
</style>