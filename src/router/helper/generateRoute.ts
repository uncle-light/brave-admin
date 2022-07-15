import { asyncRoutes } from "@/router/routes";
import { Router } from "vue-router";

export const generateRoute = async (router: Router) => {
  for (const item of asyncRoutes) {
    await router.addRoute(item);
  }
};
