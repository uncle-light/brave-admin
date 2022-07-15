import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
// 自动加载组件
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import { createHtmlPlugin } from "vite-plugin-html";
import * as path from "path";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const { VITE_APP_TITLE, VITE_PUBLIC_PATH } = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router"],
        eslintrc: {
          enabled: true,
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true,
        },
        // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
        dts: "./types/auto-import.d.ts",
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        dts: "./types/components.d.ts",
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: VITE_APP_TITLE,
          },
        },
      }),
      vueI18n({
        // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
        // you need to set i18n resource including paths !
        runtimeOnly: false,
        include: path.resolve(__dirname, "./src/locales/**"),
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    base: VITE_PUBLIC_PATH,
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  };
});
