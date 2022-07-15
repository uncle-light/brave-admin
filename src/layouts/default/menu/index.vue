<template>
  <div
    v-if="!collapsed"
    class="flex justify-center p-8 text-3xl font-bold transition-all"
  >
    {{ appInfo.appName }}
  </div>
  <div v-else class="flex justify-center p-1 text-3xl font-bold transition-all">
    <n-icon :component="LogoVue"></n-icon>
  </div>
  <n-menu
    :value="menuKey"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :render-label="renderLabel"
    :expanded-keys="menuKeys"
    @update:expanded-keys="menuKeysUpdateHandler"
    @update:value="menuKeyUpdateHandler"
  />
</template>

<script lang="ts" setup>
import { LogoVue } from "@vicons/ionicons5";
import { MenuGroupOption, MenuOption } from "naive-ui";
import { useAppInfoStore } from "@/store/modules/appInfo";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
defineProps<{ menuOptions: MenuOption[]; collapsed?: boolean }>();
const router = useRouter();
const route = useRoute();
const appInfo = useAppInfoStore();

watch(
  () => route.name,
  (val) => {
    menuKeyUpdateHandler(val as string);
  }
);

const menuKeysUpdateHandler = (keys: string[]) => {
  appInfo.setMenuKeys(keys);
};
const renderLabel = (option: MenuOption | MenuGroupOption) => {
  return h("div", t(option.label as string));
};
const menuKeys = computed<string[]>({
  get: () => appInfo.menuKeys,
  set: (val) => appInfo.setMenuKeys(val),
});
const menuKey = computed<string>({
  get: () => appInfo.menuKey,
  set: (val) => appInfo.setMenuKey(val),
});
const menuKeyUpdateHandler = (key: string) => {
  menuKey.value = key;
  router.push({ name: key });
};
</script>

<style scoped></style>
