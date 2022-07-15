<template>
  <n-config-provider
    :locale="getNaiveUILocale.lang"
    :date-locale="getNaiveUILocale.dataLang"
    :theme="appInfo.theme === 'light' ? null : darkTheme"
  >
    <n-watermark
      fullscreen
      :content="markContent"
      cross
      :font-size="16"
      :line-height="16"
      :width="384"
      :height="384"
      :x-offset="12"
      :y-offset="60"
      :rotate="-15"
      :z-index="999"
    >
    </n-watermark>
    <n-message-provider>
      <n-loading-bar-provider>
        <n-dialog-provider>
          <slot name="default"></slot>
        </n-dialog-provider>
      </n-loading-bar-provider>
    </n-message-provider>
    <n-global-style />
  </n-config-provider>
</template>
<script lang="ts" setup>
import { useLocale } from "@/locales/useLocale";
import { useAppInfoStore } from "@/store/modules/appInfo";
import { useOsTheme, darkTheme } from "naive-ui";
const { getNaiveUILocale } = useLocale();
const appInfo = useAppInfoStore();
const osThemeRef = useOsTheme();
appInfo.theme == "" ? (appInfo.theme = osThemeRef.value as string) : "";
const markContent = computed({
  get: () => appInfo.markContent,
  set: (val) => appInfo.setMarkContent(val),
});
</script>
