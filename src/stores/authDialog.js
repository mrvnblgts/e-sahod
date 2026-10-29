import { defineStore } from 'pinia'

export const useAuthDialog = defineStore('authDialog', {
  state: () => ({
    isOpen: false,
    mode: 'login'
  }),

  actions: {
    openDialog (mode = 'login') {
      this.mode = mode === 'register' ? 'register' : 'login'
      this.isOpen = true
    },

    close () {
      this.isOpen = false
    },

    setMode (mode) {
      this.mode = mode === 'register' ? 'register' : 'login'
    }
  }
})
