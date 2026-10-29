<template>
  <router-view />
  <AuthDialog />
</template>

<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AuthDialog from '@/components/auth/AuthDialog.vue'
import { useAuthDialog } from '@/stores/authDialog'

const route = useRoute()
const router = useRouter()
const authDialog = useAuthDialog()

function syncAuthQuery () {
  const mode = route.query.auth

  if (mode !== 'login' && mode !== 'register') {
    return
  }

  authDialog.openDialog(mode)

  const rest = { ...route.query }
  delete rest.auth
  router.replace({ path: route.path, query: rest })
}

watch(() => route.query.auth, syncAuthQuery, { immediate: true })
</script>
