import { zhCN, dateZhCN, enUS, dateEnUS } from "naive-ui";
import { genMessage } from "@/locales/helper";

const modules = import.meta.globEager("./zh-CN/**/*.ts");
export default {
  message: {
    ...genMessage(modules, "zh-CN"),
    naive: {
      lang: zhCN,
      dataLang: dateZhCN,
    },
  },
};
