import { defineStore } from 'pinia';

const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    }
  }
});
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

export { useAuthStore as a, useIsLoadingStore as u };
//# sourceMappingURL=isLoading-BADbcWeo.mjs.map
