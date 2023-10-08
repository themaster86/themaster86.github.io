// store/languages.js
import { defineStore } from 'pinia';

export const useLanguagesStore = defineStore('languages', {
  state: () => ({
    currentLanguage: 'de', 
  }),

  getters: {
    getCurrentLanguage() {
      return this.currentLanguage;
    },
  },

  actions: {
    setCurrentLanguage(language) {
      this.currentLanguage = language;
    },
  },
});
