import { DashboardOutlined } from "@vicons/antd";
import { NIcon } from "naive-ui";
import { Component } from "vue";

//前端路由图标映射表
export const constantRouterIcon = {
  DashboardOutlined: renderIcon(DashboardOutlined),
};

export function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
