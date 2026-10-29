<template>
  <section class="hero" id="home">
    <div class="lp-container hero__grid">
      <div class="hero__content">
        <span class="lp-badge">Barangay Management System</span>

        <h1 class="hero__title">E-Sahod</h1>

        <h2 class="hero__subtitle">
          A Barangay Payroll and Honorarium Management System with Automated Analytics
        </h2>

        <p class="hero__desc">
          Simplify payroll processing, manage personnel and honorariums, and gain valuable insights - all in one secure and easy to use system.
        </p>

        <div class="hero__cta">
          <button type="button" class="lp-btn lp-btn--primary" @click="authDialog.openDialog('register')">
            <q-icon name="arrow_forward" aria-hidden="true" />
            Get Started
          </button>
          <button type="button" class="lp-btn lp-btn--secondary" @click="scrollToFeatures">
            <q-icon name="play_circle" aria-hidden="true" />
            Watch Demo
          </button>
        </div>
      </div>

      <img
        v-if="!isSmallScreen"
        :src="statsImage"
        alt="Barangay payroll and honorarium statistics"
        class="hero__stats"
      />
    </div>

    <img
      :src="illustrationSrc"
      alt=""
      class="hero__illustration"
    />

    <div class="hero__deco hero__deco--one" aria-hidden="true"></div>
    <div class="hero__deco hero__deco--two" aria-hidden="true"></div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import statsImage from '@/assets/images/statistics.jpg'
import heroBackground from '@/assets/images/hero background.jpg'
import mobileBackground from '@/assets/images/mobile.jpg'
import { useAuthDialog } from '@/stores/authDialog'

const authDialog = useAuthDialog()

// Keep this query string in sync with the max-width: 1024px media query below.
const mql = typeof window !== 'undefined' ? window.matchMedia('(max-width: 1024px)') : null
const isSmallScreen = ref(mql ? mql.matches : false)

const illustrationSrc = computed(() =>
  isSmallScreen.value ? mobileBackground : heroBackground
)

function syncSmallScreen (e) {
  isSmallScreen.value = e.matches
}

onMounted(() => mql?.addEventListener('change', syncSmallScreen))
onBeforeUnmount(() => mql?.removeEventListener('change', syncSmallScreen))

function scrollToFeatures () {
  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(1100px 560px at 88% -8%, rgba(219, 234, 254, 0.9) 0%, rgba(239, 246, 255, 0) 62%),
    linear-gradient(180deg, #ffffff 0%, var(--lp-bg) 100%);
  padding-top: 88px;
  padding-bottom: 96px;
}

.hero__grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 640px);
  align-items: center;
  gap: 40px;
}

.hero__content {
  max-width: 600px;
}

.hero__title {
  margin: 22px 0 0;
  font-size: clamp(2rem, 6vw, 3.4rem); /*clamp(3rem, 6vw, 4.4rem) */
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.04;
  color: var(--lp-ink);
}

.hero__subtitle {
  margin: 16px 0 0;
  font-size: clamp(1.10rem, 2.2vw, 1.45rem); /* Original font:  clamp(1.15rem, 2.2vw, 1.5rem)*/
  font-weight: 600;
  line-height: 1.4;
  color: var(--lp-ink);
  max-width: 36ch;
}

.hero__desc {
  margin: 18px 0 0;
  font-size: 0.8rem; /*original font: 1.05rem */
  line-height: 1.7;
  color: var(--lp-slate);
  max-width: 560px;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-top: 34px;
}

.hero__cta .lp-btn {
  min-width: 168px;
  padding: 14px 26px;
}

.hero__cta .q-icon {
  font-size: 17px;
}

.hero__cta .lp-btn--secondary {
  color: var(--lp-primary);
  border-color: var(--lp-primary);
}

.hero__cta .lp-btn--secondary:hover {
  color: var(--lp-primary-strong);
  border-color: var(--lp-primary-strong);
}

.hero__stats {
  position: relative;
  z-index: 2;
  display: block;
  width: 100%;
  max-width: 680px;
  height: auto;
  border-radius: var(--lp-radius-lg);
  justify-self: end;
  zoom: 0.75;
  min-width: 0;
  margin-bottom: 16px;
}

.hero__illustration {
  position: absolute;
  right: -100px;
  bottom: 0;
  width: auto;
  height: 618px;
  display: block;
  z-index: 1;
}

.hero__deco {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.55;
  z-index: 0;
}

.hero__deco--one {
  width: 340px;
  height: 340px;
  right: 4%;
  top: 6%;
  background: radial-gradient(circle at 40% 40%, var(--lp-blue-100), rgba(219, 234, 254, 0) 70%);
  filter: blur(6px);
}

.hero__deco--two {
  width: 270px;
  height: 270px;
  left: -90px;
  bottom: 40px;
  background: radial-gradient(circle at 50% 50%, var(--lp-blue-50), rgba(239, 246, 255, 0) 70%);
  filter: blur(4px);
}

@media (max-width: 1024px) {
  .hero {
    padding-top: 64px;
    padding-bottom: 84px;
    background:
      radial-gradient(900px 500px at 85% -6%, rgba(219, 234, 254, 0.85) 0%, rgba(239, 246, 255, 0) 60%),
      linear-gradient(180deg, #ffffff 0%, var(--lp-bg) 100%);
  }

  .hero__grid {
    grid-template-columns: 1fr;
    gap: 72px;
  }

  .hero__content {
    max-width: 660px;
  }

  .hero__stats {
    display: none;
  }

  .hero__illustration {
    display: block;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.18;
  }
}

@media (max-width: 640px) {
  .hero__cta .lp-btn {
    min-width: 0;
    width: 100%;
  }
}
</style>