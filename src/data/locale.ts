import { ref, watch } from "vue";
import { i18n } from "@/i18n/i18n";
import { iLocale } from "@/types/types";

export let locale: iLocale = ref("zh");

watch(locale, () => {
  // 切换全局语言
  i18n.global.locale = locale.value;
});
