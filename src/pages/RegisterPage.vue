<template>
  <AuthCard
    title="Create an account"
    subtitle="Request access to the E-Sahod payroll management system."
    alt-link="/login"
    alt-label="Already have an account? Sign in"
  >
    <template #form>
      <q-form class="auth__form" @submit.prevent="onSubmit">
        <q-input
          v-model="name"
          label="Full name"
          stack-label
          outlined
          dense
          class="auth__field"
        />
        <q-input
          v-model="email"
          type="email"
          label="Email address"
          stack-label
          outlined
          dense
          class="auth__field"
        />
        <q-input
          v-model="password"
          type="password"
          label="Password"
          stack-label
          outlined
          dense
          class="auth__field"
        />
        <q-input
          v-model="confirm"
          type="password"
          label="Confirm password"
          stack-label
          outlined
          dense
          class="auth__field"
        />
        <q-btn
          type="submit"
          label="Create account"
          color="primary"
          no-caps
          unelevated
          class="auth__submit"
          :disable="submitted"
        />
        <p v-if="submitted" class="auth__info">
          Account creation will be connected to the E-Sahod backend in a later development phase.
        </p>
      </q-form>
    </template>
  </AuthCard>
</template>

<script setup>
import { ref } from 'vue'
import AuthCard from '@/components/auth/AuthCard.vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')
const submitted = ref(false)

function onSubmit () {
  submitted.value = true
}
</script>

<style scoped>
.auth__field {
  margin-bottom: 14px;
  font-family: var(--lp-font);
}

.auth__submit {
  width: 100%;
  margin-top: 8px;
  font-family: var(--lp-font);
}

.auth__info {
  margin: 16px 0 0;
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--lp-primary);
  background: var(--lp-blue-50);
  border: 1px solid var(--lp-blue-100);
  border-radius: 10px;
  padding: 10px 12px;
}
</style>