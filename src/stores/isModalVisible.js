import { defineStore } from "pinia";

export const useIsVisibleStore = defineStore('isVisible', {
    state: () => ({
        recommendationForm : false
    }),
    actions: {
      setVisibility(value) {
        this.recommendationForm = value;
      },
      getVisibility() {
        return this.recommendationForm
      },
    },

});