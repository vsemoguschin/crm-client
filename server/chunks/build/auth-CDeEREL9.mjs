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

export { useAuthStore as u };
//# sourceMappingURL=auth-CDeEREL9.mjs.map
