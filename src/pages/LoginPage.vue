<template>
  <AuthCard
    title="Sign in to E-Sahod"
    subtitle="Access the barangay payroll dashboard and analytics."
    alt-link="/register"
    alt-label="Create an account"
  >
    <template #form>
      <q-form class="auth__form" @submit.prevent="onSubmit">
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
        <q-btn
          type="submit"
          label="Sign in"
          color="primary"
          no-caps
          unelevated
          class="auth__submit"
          :disable="submitted"
        />
        <p v-if="submitted" class="auth__info">
          Thanks — sign-in will be connected to the E-Sahod backend in a later development phase.
        </p>
      </q-form>
    </template>
  </AuthCard>
</template>

<script setup>
import { ref } from 'vue'
import AuthCard from '@/components/auth/AuthCard.vue'

const email = ref('')
const password = ref('')
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