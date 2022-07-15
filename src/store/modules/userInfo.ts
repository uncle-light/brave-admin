import { defineStore } from "pinia";
import { store } from "@/store";
export const useUserInfo = defineStore({
  id: "app-user-info",
  state: () => ({
    email: "",
    nick: "xxxxx",
    token: "",
  }),
  getters: {},
  actions: {},
  persist: true,
});

export function useUserInfoStore() {
  return useUserInfo(store);
}
