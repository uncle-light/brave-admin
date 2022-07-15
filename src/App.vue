<template>
  <AppProvider>
    <router-view></router-view>
  </AppProvider>
</template>

<script setup lang="ts">
import AppProvider from "@/components/appProvider/index.vue";
</script>
<style lang="scss">
@import "./style/transition.scss";
</style>
