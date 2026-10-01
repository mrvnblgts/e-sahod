<template>
  <div class="landing">
    <LandingNavbar />
    <main>
      <HeroSection />
      <FeatureSection />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import LandingNavbar from '@/components/landing/LandingNavbar.vue'
import HeroSection from '@/components/landing/HeroSection.vue'
import FeatureSection from '@/components/landing/FeatureSection.vue'
import SiteFooter from '@/components/landing/SiteFooter.vue'
</script>