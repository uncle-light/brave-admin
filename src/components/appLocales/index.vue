<template>
  <n-dropdown
    trigger="hover"
    :options="localeList"
    @select="handleLocaleSelect"
  >
    <n-icon :size="20" :component="TranslateOutlined"></n-icon>
  </n-dropdown>
</template>
<script lang="ts" setup>
import { localeList } from "@/settings/localeSetting";
import { TranslateOutlined } from "@vicons/material";
import { LocaleType } from "@/locales/helper";
import { useLocale } from "@/locales/useLocale";
const { changeLocale } = useLocale();
const handleLocaleSelect = (key: LocaleType) => {
  changeLocale(key);
};
</script>
