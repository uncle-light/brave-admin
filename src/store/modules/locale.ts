import { defineStore } from "pinia";
import { LocaleType } from "@/settings/localeSetting";
import { store } from "@/store";

export const useLocaleStore = defineStore({
  id: "app-locale",
  state: () => ({
    localInfo: "en" as LocaleType,
    showPicker: true,
  }),
  getters: {
    getShowPicker(): boolean {
      return this.showPicker;
    },
    getLocale(): LocaleType {
      return this.localInfo;
    },
  },
  actions: {
    /**
     * Set up multilingual information and cache
     * @param type
     */
    setLocale(type: LocaleType) {
      this.localInfo = type;
    },
  },
  persist: {
    storage: window.sessionStorage,
  }, // 持久化数据
});

export function useLocaleStoreWithOut() {
  return useLocaleStore(store);
}
