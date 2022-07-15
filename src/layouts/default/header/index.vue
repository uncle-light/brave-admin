<template>
  <div class="flex justify-between items-center pl-2 pr-2">
    <div class="flex flex-row items-center">
      <div class="flex items-center space-x-4">
        <n-icon
          size="20"
          :component="menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined"
          @click="menuCollapsed = !menuCollapsed"
        ></n-icon>
        <n-icon size="20" :component="RefreshOutline"></n-icon>
        <n-breadcrumb v-if="!isMobile">
          <template v-for="routeItem in breadcrumbList" :key="routeItem.name">
            <n-breadcrumb-item>
              <n-dropdown
                v-if="routeItem.children.length"
                :options="routeItem.children"
                :render-label="renderLabel"
                @select="dropdownSelect"
              >
                <span class="link-text">
                  <component :is="routeItem.meta.icon" />
                  {{ t(routeItem.meta.title) }}
                </span>
              </n-dropdown>
              <span v-else class="link-text">
                <component :is="routeItem.meta.icon" />
                {{ t(routeItem.meta.title) }}
              </span>
            </n-breadcrumb-item>
          </template>
        </n-breadcrumb>
      </div>
    </div>
    <div class="flex flex-row items-center">
      <n-space align="center">
        <AppLocales></AppLocales>
        <AppTheme></AppTheme>
        <n-dropdown
          trigger="hover"
          :show-arrow="true"
          :options="[{ label: '退出登录', key: 'logout' }]"
          @select="handleLocaleSelect"
        >
          <n-avatar>{{ userInfo.nick }}</n-avatar>
        </n-dropdown>
      </n-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AppLocales, AppTheme } from "@/components";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@vicons/antd";
import { RefreshOutline } from "@vicons/ionicons5";
import { useAppInfoStore } from "@/store/modules/appInfo";
import { useI18n } from "vue-i18n";
import { DropdownOption } from "naive-ui";
const { t } = useI18n();
import { useLoadingBar } from "naive-ui";
import { useUserInfoStore } from "@/store/modules/userInfo";
const isMobile = inject("isMobile");
//@ts-ignore
window.loadingBar = useLoadingBar();
const renderLabel = (option: DropdownOption) => {
  return h("div", t(option.label as string));
};
const route = useRoute();
const router = useRouter();
const appInfo = useAppInfoStore();
const userInfo = useUserInfoStore();

const handleLocaleSelect = async (key: string) => {
  if (key === "logout") {
    userInfo.token = "";
    await router.replace({ name: "login" });
    appInfo.emptyState();
  }
};
const menuCollapsed = computed({
  get: () => appInfo.menuCollapsed,
  set: (val) => appInfo.setMenuCollapsed(val),
});

const breadcrumbList = computed(() => {
  return generator(route.matched);
});

const generator: any = (routerMap: any[]) => {
  return routerMap.map((item) => {
    const currentMenu = {
      ...item,
      label: item.meta.title,
      key: item.name,
      disabled: item.path === "/",
    };
    // 是否有子菜单，并递归处理
    if (item.children && item.children.length > 0) {
      // Recursion
      currentMenu.children = generator(item.children, currentMenu);
    }
    return currentMenu;
  });
};
const dropdownSelect = (key: string) => {
  router.push({ name: key });
};
</script>

<style scoped></style>
