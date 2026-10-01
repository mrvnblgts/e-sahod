<template>
  <div class="dp">
    <!-- side navigation -->
    <aside class="dp__side">
      <div class="dp__side-brand">
        <BrandLogo compact />
      </div>
      <nav class="dp__side-nav" aria-label="Preview navigation">
        <span
          v-for="item in nav"
          :key="item.label"
          class="dp__side-item"
          :class="{ 'dp__side-item--active': item.active }"
        >
          <q-icon :name="item.icon" />
          {{ item.label }}
        </span>
      </nav>
    </aside>

    <!-- main content -->
    <div class="dp__main">
      <header class="dp__head">
        <h3>Dashboard</h3>
        <p>Payroll overview and compensation insights</p>
      </header>

      <!-- stat cards -->
      <div class="dp__stats">
        <div v-for="s in stats" :key="s.label" class="dp__stat">
          <div class="dp__stat-icon" :class="'dp__stat-icon--' + s.tint" aria-hidden="true">
            <q-icon :name="s.icon" />
          </div>
          <p class="dp__stat-label">{{ s.label }}</p>
          <p class="dp__stat-value">{{ s.value }}</p>
          <p class="dp__stat-note">
            <q-icon name="arrow_upward" class="dp__stat-arrow" />
            {{ s.note }}
          </p>
        </div>
      </div>

      <!-- charts row -->
      <div class="dp__row">
        <div class="dp__card dp__chart">
          <div class="dp__card-head">
            <h4>Payroll Overview</h4>
            <span class="dp__pill">Last 6 months</span>
          </div>
          <div class="dp__bars" role="img" aria-label="Bar chart of monthly payroll totals from January to June">
            <div v-for="(v, i) in chart.values" :key="chart.months[i]" class="dp__bar-col">
              <div
                class="dp__bar"
                :class="{ 'dp__bar--last': i === chart.values.length - 1 }"
                :style="{ height: v + '%' }"
              ></div>
            </div>
          </div>
          <div class="dp__axis" aria-hidden="true">
            <span v-for="m in chart.months" :key="m">{{ m }}</span>
          </div>
        </div>

        <div class="dp__card dp__donut">
          <div class="dp__card-head">
            <h4>Compensation Distribution</h4>
          </div>
          <div class="dp__donut-vis" role="img" aria-label="Donut chart of compensation distribution">
            <svg viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#F1F5F9" stroke-width="10" />
              <circle
                v-for="s in donutSegs"
                :key="s.label"
                cx="40"
                cy="40"
                r="30"
                fill="none"
                :stroke="s.color"
                stroke-width="10"
                :stroke-dasharray="`${s.dash} ${CIRC - s.dash}`"
                :stroke-dashoffset="-s.offset"
                transform="rotate(-90 40 40)"
              />
              <text x="40" y="42" text-anchor="middle" font-size="8" font-weight="700" fill="#0F172A">&#8369;228.5K</text>
            </svg>
            <div class="dp__legend">
              <span v-for="s in donut" :key="s.label" class="dp__legend-item">
                <i class="dp__legend-dot" :style="{ background: s.color }"></i>
                {{ s.label }}
                <strong>{{ s.value }}%</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- AI insight -->
      <div class="dp__ai">
        <div class="dp__ai-head">
          <span class="dp__ai-chip" aria-hidden="true">
            <q-icon name="auto_awesome" />
          </span>
          <div>
            <p class="dp__ai-title">AI Insight</p>
          </div>
        </div>
        <p class="dp__ai-body">
          Payroll expenses increased by <strong>8.4%</strong> compared with the previous period. Review honorarium and allowance changes for additional context.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BrandLogo from './BrandLogo.vue'

const nav = [
  { label: 'Dashboard', icon: 'dashboard', active: true },
  { label: 'Personnel', icon: 'groups' },
  { label: 'Payroll', icon: 'payments' },
  { label: 'Honorarium', icon: 'redeem' },
  { label: 'Reports', icon: 'description' },
  { label: 'Analytics', icon: 'insights' }
]

const stats = [
  { label: 'Total Personnel', value: 48, note: '+2 this period', icon: 'groups', tint: 'blue' },
  { label: 'Monthly Payroll', value: '₱186,500', note: '+8.4% vs last', icon: 'payments', tint: 'green' },
  { label: 'Honorarium', value: '₱42,000', note: '+5.2% vs last', icon: 'redeem', tint: 'amber' }
]

const chart = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  values: [34, 42, 38, 52, 61, 76]
}

const donut = [
  { label: 'Salaries', value: 58, color: '#2563EB' },
  { label: 'Honorarium', value: 24, color: '#8B5CF6' },
  { label: 'Allowances', value: 11, color: '#F59E0B' },
  { label: 'Deductions', value: 7, color: '#E2E8F0' }
]

const R = 30
const CIRC = 2 * Math.PI * R
let acc = 0
const donutSegs = donut.map((s) => {
  const dash = (s.value / 100) * CIRC
  const seg = { label: s.label, color: s.color, dash, offset: acc }
  acc += dash
  return seg
})
</script>

<style scoped>
.dp {
  display: flex;
  background: #ffffff;
  border: 1px solid var(--lp-border);
  border-radius: var(--lp-radius-xl);
  box-shadow: var(--lp-shadow-xl);
  overflow: hidden;
  /*max-width: 620px;*/
  width: 100%;
  text-align: left;
}

/* ---- sidebar ---- */
.dp__side {
  width: 140px;
  flex-shrink: 0;
  border-right: 1px solid var(--lp-border);
  background: var(--lp-surface);
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dp__side-brand {
  padding: 2px 6px;
}

.dp__side-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dp__side-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 9px;
  font-size: 11px;
  font-weight: 500;
  color: var(--lp-slate);
}

.dp__side-item .q-icon {
  font-size: 16px;
  opacity: 0.75;
}

.dp__side-item--active {
  background: var(--lp-blue-50);
  color: var(--lp-primary);
  font-weight: 600;
}

.dp__side-item--active .q-icon {
  opacity: 1;
}

/* ---- main ---- */
.dp__main {
  flex: 1;
  min-width: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  background: var(--lp-bg);
}

.dp__head h3 {
  font-size: 13.5px;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.01em;
  color: var(--lp-ink);
}

.dp__head p {
  font-size: 10px;
  color: var(--lp-muted);
  margin: 2px 0 0;
}

/* ---- stats ---- */
.dp__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.dp__stat {
  background: #ffffff;
  border: 1px solid var(--lp-border);
  border-radius: 12px;
  box-shadow: var(--lp-shadow-sm);
  padding: 8px 10px;
}

.dp__stat-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 6px;
}

.dp__stat-icon--blue {
  background: var(--lp-blue-50);
  color: var(--lp-primary);
}

.dp__stat-icon--green {
  background: #F0FDF4;
  color: #16A34A;
}

.dp__stat-icon--amber {
  background: #FFFBEB;
  color: #D97706;
}

.dp__stat-label {
  font-size: 10px;
  color: var(--lp-muted);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.dp__stat-value {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--lp-ink);
  margin: 2px 0 0;
}

.dp__stat-note {
  font-size: 9.5px;
  color: #16A34A;
  margin: 3px 0 0;
  display: flex;
  align-items: center;
  gap: 2px;
}

.dp__stat-arrow {
  font-size: 11px;
}

/* ---- shared card ---- */
.dp__card {
  background: #ffffff;
  border: 1px solid var(--lp-border);
  border-radius: 12px;
  box-shadow: var(--lp-shadow-sm);
  padding: 10px;
}

.dp__card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
}

.dp__card-head h4 {
  font-size: 11.5px;
  font-weight: 700;
  margin: 0;
  color: var(--lp-ink);
}

.dp__pill {
  font-size: 10px;
  font-weight: 500;
  color: var(--lp-muted);
  background: var(--lp-surface-muted);
  border: 1px solid var(--lp-border);
  padding: 3px 8px;
  border-radius: 999px;
  white-space: nowrap;
}

/* ---- chart ---- */
.dp__row {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
  gap: 8px;
}

.dp__bars {
  height: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
  padding: 0 2px;
  border-bottom: 1px solid var(--lp-border);
  background-image: repeating-linear-gradient(
    to top,
    transparent 0 calc(100% / 3 - 1px),
    var(--lp-border) calc(100% / 3 - 1px) calc(100% / 3)
  );
  background-size: 100% 100%;
}

.dp__bar-col {
  display: flex;
  align-items: flex-end;
  height: 100%;
  flex: 1;
}

.dp__bar {
  width: 58%;
  margin-inline: auto;
  min-height: 6px;
  border-radius: 5px 5px 2px 2px;
  background: var(--lp-primary);
  opacity: 0.85;
}

.dp__bar--last {
  background: var(--lp-primary-strong);
  opacity: 1;
}

.dp__axis {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 4px;
  padding: 0 2px;
}

.dp__axis span {
  flex: 1;
  text-align: center;
  font-size: 9px;
  color: var(--lp-muted);
}

/* ---- donut ---- */
.dp__donut-vis {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.dp__donut-vis svg {
  width: 72px;
  height: 72px;
  display: block;
}

.dp__legend {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.dp__legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  color: var(--lp-slate);
  line-height: 1.4;
}

.dp__legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 3px;
  flex-shrink: 0;
}

.dp__legend-item strong {
  margin-left: auto;
  color: var(--lp-ink);
  font-weight: 600;
}

/* ---- AI insight ---- */
.dp__ai {
  background: var(--lp-violet-50);
  border: 1px solid var(--lp-violet-100);
  border-radius: 12px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.dp__ai-head {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.dp__ai-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background: var(--lp-violet-100);
  color: var(--lp-violet-500);
  font-size: 14px;
}

.dp__ai-title {
  font-size: 11px;
  font-weight: 700;
  color: var(--lp-ink);
  margin: 0;
  white-space: nowrap;
}

.dp__ai-body {
  font-size: 10px;
  line-height: 1.5;
  color: #4A5568;
  margin: 0;
}

.dp__ai-body strong {
  color: var(--lp-violet-500);
}

/* ---- responsive inside preview ---- */
@media (max-width: 640px) {
  .dp__side {
    display: none;
  }

  .dp__row {
    grid-template-columns: 1fr;
  }

  .dp__ai {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>