import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import { basicRoutes } from "@/router/routes";
import { App } from "vue";
export const router = createRouter({
  // 创建一个 hash 历史记录。
  history: createWebHashHistory("brave-admin"),
  // 应该添加到路由的初始路由列表。
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 是否应该禁止尾部斜杠。默认为假
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router);
}
