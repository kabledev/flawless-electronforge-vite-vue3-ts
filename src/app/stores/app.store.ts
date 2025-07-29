import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    config: {} as any
  }),
  actions: {
    hello() {
      return 'Hello from app store!'
    },

  },
})