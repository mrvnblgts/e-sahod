<template>
  <section class="features" id="features">
    <div class="lp-container">
      <div class="features__head">
        <h2 class="lp-badge">Key Features</h2>
        <p class="features__lead">
          Everything You Need for a Smarter Barangay Payroll Management
        </p>
        <p class="features__desc">
          From personal records to AI-powered insights, E-Sahod gives you tools to manage, monitor, and make better decisions.
        </p>
      </div>

      <div class="features__grid">
        <FeatureCard v-for="f in features" :key="f.title" v-bind="f" />
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue'

const features = [
  {
    icon: 'groups',
    title: 'Personnel Management',
    description: 'Centralize personnel records, positions, employment status, and compensation information.',
    tint: 'blue'
  },
  {
    icon: 'payments',
    title: 'Payroll & Honorarium',
    description: 'Simplify payroll processing, honorarium management, deductions, and compensation tracking.',
    tint: 'green',
    deco: 'attach_money'
  },
  {
    icon: 'analytics',
    title: 'Automated Analytics',
    description: 'Monitor payroll trends, compensation distributions, expenses, and important changes automatically.',
    tint: 'violet',
    deco: 'bar_chart'
  },
  {
    icon: 'psychology',
    title: 'AI-Powered Insights',
    description: 'Get intelligent summaries, explanations, and data-grounded insights from your payroll information.',
    tint: 'amber',
    deco: 'lightbulb'
  },
  {
    icon: 'security',
    title: 'Secure & Reliable',
    description: 'Protect sensitive payroll records with authentication, access control, validation, and audit logs.',
    tint: 'teal',
    deco: 'lock'
  }
]
</script>

<style scoped>
.features {
  padding: 96px 0 112px;
  background: var(--lp-bg);
}

.features__head {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 52px;
}

.features__lead {
  margin: 14px auto 0;
  max-width: 30ch; /*44ch */
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1.6;
  color: var(--lp-ink);
}

.features__desc {
  margin: 16px auto 0;
  max-width: 380px;
  font-size: 0.8rem;
  line-height: 1.7;
  color: var(--lp-slate);
}

.features__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

@media (max-width: 640px) {
  .features {
    padding: 72px 0 84px;
  }

  .features__head {
    margin-bottom: 40px;
  }
}
</style>