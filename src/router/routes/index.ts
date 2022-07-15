import { useI18n } from "@/hooks/web/useI18n";
const { t } = useI18n();
import LAYOUT from "@/layouts/default/index.vue";
import { renderIcon } from "@/layouts/default/helper/renderIcon";
import { DashboardOutlined } from "@vicons/antd";
import { RouteRecordRaw, RouterView } from "vue-router";
import { BookOutline } from "@vicons/ionicons5";
export const LOGIN_ROUTE = {
  path: "/login",
  name: "login",
  component: () => import("@/views/system/login/index.vue"),
  meta: {
    title: t("routes.basic.login.ts"),
    hideMenu: true,
  },
};
export const HOME_ROUTE: RouteRecordRaw = {
  path: "/",
  name: "dashboard",
  component: LAYOUT,
  meta: {
    title: t("routes.basic.dashboard"),
    icon: renderIcon(DashboardOutlined),
    hideMenu: false,
  },
  redirect: "/index",
  children: [
    {
      path: "index",
      name: "home_index",
      component: () => import("@/views/system/home/index.vue"),
      // component: () => import("@/views/pdf/index.vue"),
      meta: {
        title: t("routes.basic.home"),
        hideBreadcrumb: false,
        hideMenu: false,
      },
    },
  ],
};
export const PAGE_NOT_FOUND_ROUTE = {
  path: "/:path(.*)*",
  name: "404",
  component: h(RouterView),
  meta: {
    title: "errorPage",
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: "/:path(.*)*",
      name: "404_index",
      component: () => import("@/views/system/errorPage/index.vue"),
      meta: {
        title: "errorPage",
        hideBreadcrumb: true,
        hideMenu: true,
      },
    },
  ],
};
export const basicRoutes = [LOGIN_ROUTE, HOME_ROUTE, PAGE_NOT_FOUND_ROUTE];
export const asyncRoutes = [
  {
    path: "/lessonPlan",
    name: "lessonPlan",
    component: LAYOUT,
    meta: {
      title: t("routes.basic.test1"),
      icon: renderIcon(BookOutline),
      hideMenu: false,
    },
    children: [
      {
        path: "/classification",
        name: "classification",
        component: () => import("@/views/lessonPlan/Classification.vue"),
        meta: {
          title: t("routes.basic.test11"),
          hideBreadcrumb: false,
          hideMenu: false,
        },
      },
      {
        path: "/list",
        name: "lessonList",
        component: () => import("@/views/lessonPlan/lessonList.vue"),
        meta: {
          title: t("routes.basic.test12"),
          hideBreadcrumb: false,
          hideMenu: false,
        },
      },
    ],
  },
  {
    path: "/lesson",
    name: "lesson",
    component: LAYOUT,
    meta: {
      title: t("routes.basic.test2"),
      icon: renderIcon(BookOutline),
      hideMenu: false,
    },
    children: [
      {
        path: "/lesson_index",
        name: "lessonIndex",
        component: () => import("@/views/pdf/index.vue"),
        meta: {
          title: t("routes.basic.test21"),
          hideBreadcrumb: false,
          hideMenu: false,
        },
      },
    ],
  },
];
