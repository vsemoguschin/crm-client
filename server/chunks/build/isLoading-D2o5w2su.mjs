import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { defineStore } from 'pinia';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function valueUpdater(updaterOrValue, ref) {
  ref.value = typeof updaterOrValue === "function" ? updaterOrValue(ref.value) : updaterOrValue;
}
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

export { useAuthStore as a, cn as c, useIsLoadingStore as u, valueUpdater as v };
//# sourceMappingURL=isLoading-D2o5w2su.mjs.map
