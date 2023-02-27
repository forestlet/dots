import { ref, watch } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
import { i18n } from "@/i18n/i18n";
import { iLocale } from "@/types/types";

export let locale: iLocale = ref("cn");
export let element_plus_locale = ref(zhCn);
watch(locale, () => {
  // 切换全局语言
  i18n.global.locale = locale.value;

  // 切换 element plus 语言
  switch (locale.value) {
    case "cn":
      element_plus_locale.value = zhCn;
      break;
    case "en":
      element_plus_locale.value = en;
      break;
    default:
      element_plus_locale.value = en;
      break;
  }
});
