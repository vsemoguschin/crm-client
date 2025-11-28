import { defineStore } from 'pinia';

const useIsLoadingStore = defineStore("isLoading", {
  state: () => ({
    isLoading: false
  }),
  actions: {
    set(value) {
      this.isLoading = value;
    },
    toggle() {
      this.isLoading = !this.isLoading;
    }
  }
});

export { useIsLoadingStore as u };
//# sourceMappingURL=isLoading-BaPa0n0V.mjs.map
