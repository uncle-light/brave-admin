<template>
  <n-icon
    size="20"
    :component="appInfo.theme === 'light' ? MoonOutline : SunnyOutline"
    @click="appInfo.setTheme(appInfo.theme === 'light' ? 'dark' : 'light')"
  ></n-icon>
</template>

<script lang="ts" setup>
import { SunnyOutline, MoonOutline } from "@vicons/ionicons5";
import { useAppInfoStore } from "@/store/modules/appInfo";
const appInfo = useAppInfoStore();
</script>

<style scoped></style>
