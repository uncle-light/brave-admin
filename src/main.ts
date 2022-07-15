import { createApp } from "vue";
import App from "./App.vue";
import "./style/tailwind.css";
import "vfonts/Lato.css";
import "vfonts/FiraCode.css";
import { setupErrorHandle } from "@/logics/error-handle";
import { setupFixStyle } from "@/logics/tailwind";
import { setupStore } from "@/store";
import { setupRouter, router } from "@/router";
import { setupI18n } from "@/locales/setupI18n";
import { setupRouterGuard } from "@/router/guard";

async function bootstrap() {
  const app = createApp(App);
  // 解决tailwind 样式覆盖
  setupFixStyle();
  // 挂载pinia
  setupStore(app);
  // 处理异常
  // setupErrorHandle(app);
  // 国际化
  await setupI18n(app);
  setupRouter(app);
  setupRouterGuard(router);
  await router.isReady();
  // 启动应用
  app.mount("#app");
}

void bootstrap();
