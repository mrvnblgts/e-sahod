<template>
  <div class="brand" :class="{ 'brand--compact': compact, 'brand--light': light }">
    <span class="brand__mark" aria-hidden="true">
      <img :src="logoUrl" alt="" class="brand__logo" />
    </span>
    <span class="brand__text">E-Sahod</span>
  </div>
</template>

<script setup>
import logoUrl from '@/assets/images/logo.png'

defineProps({
  compact: { type: Boolean, default: false },
  light: { type: Boolean, default: false }
})
</script>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
}

.brand__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.brand__logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.brand__text {
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--lp-ink);
}

.brand--compact .brand__mark {
  width: 26px;
  height: 26px;
}

.brand--compact .brand__text {
  font-size: 0.95rem;
}

.brand--light .brand__mark {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 5px;
}

.brand--light .brand__text {
  color: #ffffff;
}
</style>