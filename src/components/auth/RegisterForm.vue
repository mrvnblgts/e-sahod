<template>
  <q-form ref="formRef" class="auth-form" @submit.prevent="onSubmit">
    <div class="auth-fields">
      <q-input
        v-model="name"
        label="Full name"
        stack-label
        outlined
        dense
        autocomplete="name"
        class="auth-field"
        :disable="loading"
        :rules="nameRules"
        lazy-rules
      >
        <template #prepend>
          <q-icon name="person" aria-hidden="true" />
        </template>
      </q-input>

      <q-input
        v-model="email"
        type="email"
        label="Email address"
        stack-label
        outlined
        dense
        autocomplete="email"
        class="auth-field"
        :disable="loading"
        :rules="emailRules"
        lazy-rules
      >
        <template #prepend>
          <q-icon name="mail" aria-hidden="true" />
        </template>
      </q-input>

      <q-input
        v-model="password"
        :type="showPassword ? 'text' : 'password'"
        label="Password"
        stack-label
        outlined
        dense
        autocomplete="new-password"
        class="auth-field"
        :disable="loading"
        :rules="passwordRules"
        lazy-rules
      >
        <template #prepend>
          <q-icon name="lock" aria-hidden="true" />
        </template>
        <template #append>
          <q-btn
            flat
            round
            dense
            :icon="showPassword ? 'visibility_off' : 'visibility'"
            :aria-label="showPassword ? 'Hide password' : 'Show password'"
            @click="showPassword = !showPassword"
          />
        </template>
      </q-input>

      <q-input
        v-model="confirm"
        :type="showConfirm ? 'text' : 'password'"
        label="Confirm password"
        stack-label
        outlined
        dense
        autocomplete="new-password"
        class="auth-field"
        :disable="loading"
        :rules="confirmRules"
        lazy-rules
      >
        <template #prepend>
          <q-icon name="lock_reset" aria-hidden="true" />
        </template>
        <template #append>
          <q-btn
            flat
            round
            dense
            :icon="showConfirm ? 'visibility_off' : 'visibility'"
            :aria-label="showConfirm ? 'Hide password confirmation' : 'Show password confirmation'"
            @click="showConfirm = !showConfirm"
          />
        </template>
      </q-input>
    </div>

    <q-btn
      type="submit"
      label="Create account"
      color="primary"
      no-caps
      unelevated
      class="auth-submit"
      :loading="loading"
    >
      <template #loading>
        <q-spinner-dots size="20px" />
      </template>
    </q-btn>

    <p v-if="status" class="auth-status">{{ status }}</p>

    <div class="auth-divider"><span>or continue with</span></div>

    <div class="auth-social">
      <q-btn class="auth-social__btn" outline no-caps :disable="loading" @click="showPlaceholder('Google sign-up')">
        <q-icon name="fab fa-google" class="auth-social__icon" aria-hidden="true" />
        <span>Google</span>
      </q-btn>
    </div>

    <p class="auth-switch">
      Already have an account?
      <button type="button" class="auth-link" @click="authDialog.setMode('login')">
        Sign in
      </button>
    </p>
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthDialog } from '@/stores/authDialog'

const authDialog = useAuthDialog()

const formRef = ref(null)
const name = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')
const showPassword = ref(false)
const showConfirm = ref(false)
const loading = ref(false)
const status = ref('')

const nameRules = [
  (value) => !!value || 'Full name is required.'
]

const emailRules = [
  (value) => !!value || 'Email address is required.',
  (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Enter a valid email address.'
]

const passwordRules = [
  (value) => !!value || 'Password is required.',
  (value) => value.length >= 8 || 'Use at least 8 characters.'
]

const confirmRules = [
  (value) => !!value || 'Please confirm your password.',
  (value) => value === password.value || 'Passwords do not match.'
]

function showPlaceholder (feature) {
  status.value = `${feature} will be connected to the E-Sahod backend in a later development phase.`
}

async function onSubmit () {
  status.value = ''
  const valid = await formRef.value.validate()

  if (!valid) {
    return
  }

  loading.value = true
  await new Promise((resolve) => setTimeout(resolve, 700))
  loading.value = false
  status.value = 'Thanks — account creation will be connected to the E-Sahod backend in a later development phase.'
}
</script>
