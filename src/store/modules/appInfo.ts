import { defineStore } from "pinia";
import { store } from "@/store";
export const useAppInfo = defineStore({
  id: "app-info",
  state: () => ({
    appName: import.meta.env.VITE_APP_TITLE,
    routerPath: "" as string, // 路由路径
    menuKey: "" as string, // 菜单key
    menuKeys: [] as string[], // 菜单展开keys
    menuCollapsed: false, // 菜单收起
    tabs: "" as string, // 选项卡
    showWaterMark: true,
    theme: "",
    isMobile: false,
    markContent: import.meta.env.VITE_APP_TITLE,
  }),
  getters: {},
  actions: {
    setTheme(theme: string) {
      this.theme = theme;
    },
    setMenuCollapsed(collapsed: boolean) {
      this.menuCollapsed = collapsed;
    },
    setMenuKey(key: string) {
      this.menuKey = key;
    },
    setMenuKeys(keys: string[]) {
      this.menuKeys = keys;
    },
    setMarkStatus(val: boolean) {
      this.showWaterMark = val;
    },
    setMarkContent(val: string) {
      this.markContent = val;
    },
    emptyState() {
      this.menuKey = "";
      this.menuKeys = [];
    },
    setMobile(value: boolean) {
      this.isMobile = value;
    },
  },
  persist: {
    storage: window.sessionStorage,
  },
});

export function useAppInfoStore() {
  return useAppInfo(store);
}
