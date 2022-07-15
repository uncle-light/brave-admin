import { enUS, dateEnUS } from "naive-ui";
import { genMessage } from "@/locales/helper";

const modules = import.meta.globEager("./en/**/*.ts");
export default {
  message: {
    ...genMessage(modules, "en"),
    naive: {
      lang: enUS,
      dataLang: dateEnUS,
    },
  },
};
