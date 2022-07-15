import { defineStore } from "pinia";
import { store } from "@/store";
export const usePermission = defineStore({
  id: "app-permission",
  state: () => ({
    getIsDynamicAddedRoute: false,
  }),
  getters: {},
  actions: {
    setIsDynamicAddedRoute() {
      this.getIsDynamicAddedRoute = !this.getIsDynamicAddedRoute;
    },
  },
});

export function usePermissionStore() {
  return usePermission(store);
}
