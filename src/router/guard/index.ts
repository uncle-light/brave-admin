import { useLoadingBar } from "naive-ui";
import { Router } from "vue-router";
import { useUserInfoStore } from "@/store/modules/userInfo";
import { generateRoute } from "@/router/helper/generateRoute";
import { usePermissionStore } from "@/store/modules/permission";
export function setupRouterGuard(router: Router) {
  createPageLoadingGuard(router);
  createRouterGuard(router);
}

function createPageLoadingGuard(router: Router) {
  router.beforeEach(() => {
    // @ts-ignore
    if (window.loadingBar as any) {
      // @ts-ignore
      window.loadingBar.start();
    }
    return true;
  });
  router.afterEach(() => {
    // @ts-ignore
    if (window.loadingBar) {
      // @ts-ignore
      window.loadingBar.finish();
    }
  });
}
function createRouterGuard(router: Router) {
  const permissionStore = usePermissionStore();
  const userInfo = useUserInfoStore();

  router.beforeEach(async (to, from) => {
    if (!userInfo.token && to.name !== "login") {
      return { name: "login" };
    }
    if (userInfo.token && !permissionStore.getIsDynamicAddedRoute) {
      await generateRoute(router);
      permissionStore.setIsDynamicAddedRoute();
      return to.fullPath;
    }
    return true;
  });
}
