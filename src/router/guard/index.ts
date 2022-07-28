import { Router } from "vue-router";
import { useUserInfoStore } from "@/store/modules/userInfo";
import { generateRoute } from "@/router/helper/generateRoute";
import { usePermissionStore } from "@/store/modules/permission";
import { createDiscreteApi } from "naive-ui";
const { loadingBar } = createDiscreteApi(["loadingBar"]);
export function setupRouterGuard(router: Router) {
  createPageLoadingGuard(router);
  createRouterGuard(router);
}

function createPageLoadingGuard(router: Router) {
  router.beforeEach(() => {
    loadingBar.start();
    return true;
  });
  router.afterEach(() => {
    // @ts-ignore
    // @ts-ignore
    loadingBar.finish();
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
