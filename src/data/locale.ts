import { ref, watch } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
import { i18n } from "@/i18n/i18n";
import { iLocale } from "@/types/types";

export let locale: iLocale = ref("cn");
export let element_plus_locale = ref(zhCn);
export let shortcuts = [
  {
    text: i18n.global.t("message.filter.shortcuts.today"),
    value: () => {
      const end = new Date();
      const start = new Date();
      return [start, end];
    },
  },
  {
    text: i18n.global.t("message.filter.shortcuts.this-week"),
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(
        start.getTime() - (start.getDay() - 1) * 24 * 60 * 60 * 1000
      );
      return [start, end];
    },
  },
  {
    text: i18n.global.t("message.filter.shortcuts.this-month"),
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.setDate(1));
      return [start, end];
    },
  },
  {
    text: i18n.global.t("message.filter.shortcuts.this-year"),
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(new Date(start.setMonth(0)).setDate(1));
      return [start, end];
    },
  },
  {
    text: i18n.global.t("message.filter.shortcuts.last-week"),
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: i18n.global.t("message.filter.shortcuts.last-month"),
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.setMonth(start.getMonth() - 1));
      return [start, end];
    },
  },
  {
    text: i18n.global.t("message.filter.shortcuts.last-year"),
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.setFullYear(start.getFullYear() - 1));
      return [start, end];
    },
  },
];

const switch_element_plus_lang = () => {
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
};

const switch_calendar_lang = () => {
  shortcuts = [
    {
      text: i18n.global.t("message.filter.shortcuts.today"),
      value: () => {
        const end = new Date();
        const start = new Date();
        return [start, end];
      },
    },
    {
      text: i18n.global.t("message.filter.shortcuts.this-week"),
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(
          start.getTime() - (start.getDay() - 1) * 24 * 60 * 60 * 1000
        );
        return [start, end];
      },
    },
    {
      text: i18n.global.t("message.filter.shortcuts.this-month"),
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.setDate(1));
        return [start, end];
      },
    },
    {
      text: i18n.global.t("message.filter.shortcuts.this-year"),
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(new Date(start.setMonth(0)).setDate(1));
        return [start, end];
      },
    },
    {
      text: i18n.global.t("message.filter.shortcuts.last-week"),
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        return [start, end];
      },
    },
    {
      text: i18n.global.t("message.filter.shortcuts.last-month"),
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.setMonth(start.getMonth() - 1));
        return [start, end];
      },
    },
    {
      text: i18n.global.t("message.filter.shortcuts.last-year"),
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.setFullYear(start.getFullYear() - 1));
        return [start, end];
      },
    },
  ];
};

watch(locale, () => {
  // 切换全局语言
  i18n.global.locale = locale.value;

  // 切换 element plus 语言
  switch_element_plus_lang();

  // 切换 calendar 语言
  switch_calendar_lang();
});
