import { createI18n } from "vue-i18n";
import cn from "./cn.json";
import en from "./en.json";

const messages = {
  en: {
    message: en,
  },
  cn: {
    message: cn,
  },
};

export const i18n = createI18n({
  locale: "cn",
  fallbackLocale: "en",
  messages,
});
