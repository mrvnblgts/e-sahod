<template>
  <article
    class="fc"
    :class="{
      'fc--tint-blue': tint === 'blue',
      'fc--tint-green': tint === 'green',
      'fc--tint-violet': tint === 'violet',
      'fc--tint-amber': tint === 'amber',
      'fc--tint-teal': tint === 'teal'
    }"
  >
    <div class="fc__icon" aria-hidden="true">
      <q-icon :name="icon" />
    </div>
    <h3 class="fc__title">{{ title }}</h3>
    <p class="fc__desc">{{ description }}</p>
    <div class="fc__rule" aria-hidden="true"></div>
    <q-icon class="fc__deco" :name="deco" aria-hidden="true" />
  </article>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tint: { type: String, default: '' },
  deco: { type: String, default: 'person' }
})
</script>

<style scoped>
.fc {
  position: relative;
  overflow: hidden;
  background: var(--lp-surface);
  border: 1px solid var(--lp-border);
  border-radius: var(--lp-radius-lg);
  box-shadow: var(--lp-shadow-sm);
  padding: 28px;
  width: 100%;
  max-width: 378px;
  flex: 1 1 300px;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.fc:hover {
  transform: translateY(-3px);
  box-shadow: var(--lp-shadow-lg);
  border-color: var(--fc-accent-100, var(--lp-blue-100));
}

.fc--tint-blue {
  --fc-accent: #2563EB;
  --fc-accent-100: var(--lp-blue-100);
  background: rgba(37, 99, 235, 0.1);
}

.fc--tint-green {
  --fc-accent: #6FC276;
  --fc-accent-100: #BAE6B7;
  background: rgba(111, 194, 118, 0.1);
}

.fc--tint-violet {
  --fc-accent: #8B2CF5;
  --fc-accent-100: #E9D5FF;
  background: rgba(139, 44, 245, 0.1);
}

.fc--tint-amber {
  --fc-accent: #F29D38;
  --fc-accent-100: #FCD9A8;
  background: rgba(242, 157, 56, 0.1);
}

.fc--tint-teal {
  --fc-accent: #0F766E;
  --fc-accent-100: var(--lp-teal-100);
  background: rgba(15, 118, 110, 0.1);
}

.fc--tint-blue .fc__icon,
.fc--tint-green .fc__icon,
.fc--tint-violet .fc__icon,
.fc--tint-amber .fc__icon,
.fc--tint-teal .fc__icon {
  color: #FFFFFF;
}

.fc--tint-blue .fc__icon {
  background: linear-gradient(
    to top,
    rgba(37, 99, 235, 1) 0%,
    rgba(37, 99, 235, 0.1) 100%
  );
}

.fc--tint-green .fc__icon {
  background: linear-gradient(
    to top,
    var(--lp-green-600) 0%,
    rgba(111, 194, 118, 0.1) 100%
  );
}

.fc--tint-violet .fc__icon {
  background: linear-gradient(
    to top,
    #8B2CF5 0%,
    rgba(139, 44, 245, 0.1) 100%
  );
}

.fc--tint-amber .fc__icon {
  background: linear-gradient(
    to top,
    var(--lp-amber-600) 0%,
    rgba(242, 157, 56, 0.1) 100%
  );
}

.fc--tint-teal .fc__icon {
  background: linear-gradient(
    to top,
    var(--lp-teal-600) 0%,
    rgba(15, 118, 110, 0.1) 100%
  );
}

.fc--tint-blue .fc__rule,
.fc--tint-green .fc__rule,
.fc--tint-violet .fc__rule,
.fc--tint-amber .fc__rule,
.fc--tint-teal .fc__rule {
  display: block;
}

.fc--tint-blue .fc__deco,
.fc--tint-green .fc__deco,
.fc--tint-violet .fc__deco,
.fc--tint-amber .fc__deco,
.fc--tint-teal .fc__deco {
  display: block;
}

.fc__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 13px;
  background: var(--lp-blue-50);
  color: var(--lp-primary);
  font-size: 24px;
  margin-bottom: 18px;
}

.fc__title {
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--lp-ink);
  margin: 0;
}

.fc__desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--lp-slate);
  margin: 8px 0 0;
}

.fc__rule {
  display: none;
  width: 40px;
  height: 3px;
  margin-top: 16px;
  border-radius: 1px;
  background: var(--fc-accent, var(--lp-primary));
}

.fc__deco {
  display: none;
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 135px;
  color: var(--fc-accent, var(--lp-primary));
  opacity: 0.1;
  pointer-events: none;
  z-index: 0;
}
</style>