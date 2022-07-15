<template>
  <div class="app-default">
    <n-layout has-sider class="app-layout" sider-placement="left">
      <n-layout-sider
        v-if="!isMobile"
        class="app-layout-sider"
        bordered
        show-trigger="bar"
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <AppMenu :collapsed="collapsed" :menu-options="menuOptions"></AppMenu>
      </n-layout-sider>
      <n-drawer v-model:show="showMobileMenu" placement="left">
        <AppMenu :menu-options="menuOptions"></AppMenu>
      </n-drawer>
      <n-layout class="app-layout-content">
        <n-layout-header position="absolute" class="p-3 box-shadow" bordered>
          <Header></Header>
        </n-layout-header>
        <n-layout-content
          embedded
          class="app-layout-content-main"
          content-style="padding: 24px;"
        >
          <RouterView>
            <template #default="{ Component, route }">
              <transition name="zoom-out" mode="out-in" appear>
                <div :key="route.fullPath" class="h-full">
                  <component :is="Component" />
                </div>
              </transition>
            </template>
          </RouterView>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>

<script lang="ts" setup>
import Header from "./header/index.vue";
import { MenuOption } from "naive-ui";
import { computed } from "vue";
import { useAppInfoStore } from "@/store/modules/appInfo";
import { asyncRoutes, basicRoutes } from "@/router/routes";
import { generateMenu } from "@/layouts/default/helper/generateMenu";
import { AppMenu } from "./menu";
import { useI18n } from "vue-i18n";
const showMobileMenu = computed({
  get: () => isMobile.value && collapsed.value,
  set: (val) => appInfo.setMenuCollapsed(val),
});
const appInfo = useAppInfoStore();
const router = useRouter();
const menuOptions: MenuOption[] = generateMenu([
  ...basicRoutes,
  ...asyncRoutes,
]);
const { t } = useI18n();
const mobileWidth = 768;

const collapsed = computed<boolean>({
  get: () => appInfo.menuCollapsed,
  set: (val) => appInfo.setMenuCollapsed(val),
});

const isMobile = computed({
  get: () => appInfo.isMobile,
  set: (val) => appInfo.setMobile(val),
});
const checkMobileMode = () => {
  isMobile.value = document.body.clientWidth <= mobileWidth;
  collapsed.value = false;
};
const watchWidth = () => {
  const Width = document.body.clientWidth;
  collapsed.value = Width <= 950;
  checkMobileMode();
};
provide("isMobile", isMobile);
onMounted(() => {
  checkMobileMode();
  window.addEventListener("resize", watchWidth);
});
</script>

<style scoped lang="scss">
.box-shadow {
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
}
.app-default {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .app-layout {
    flex: 1;
    display: flex;
    flex-direction: row;
    height: 100%;
    .app-layout-sider {
      height: 100%;
      position: relative;
      z-index: 13;
      transition: all 0.2s ease-in-out;
      @extend .box-shadow;
    }
    .app-layout-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      .app-layout-content-main {
        height: calc(100% - 65px);
        width: 100%;
        margin-top: 65px;
      }
    }
  }
}
</style>
