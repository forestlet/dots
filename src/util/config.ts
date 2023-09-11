import { Ref, ref } from "vue";
import { changeLocale } from "@/i18n/i18n";

export const isMac = /macintosh|mac os x/i.test(navigator.userAgent);

export const popover_content = ref("");

type Tlanguage =
  | "zh"
  | "zh_tw"
  | "en"
  | "de"
  | "es"
  | "fr"
  | "ja"
  | "ko"
  | "pt"
  | "ru"
  | "uk";
export let languages = [
  "en",
  "es",
  "de",
  "fr",
  "ja",
  "ko",
  "pt",
  "ru",
  "uk",
  "zh",
  "zh_tw",
];
export let locale: Ref<Tlanguage> = ref("en");

export const light_themes = [
  "light",
  "emerald",
  "pastel",
  "wireframe",
  "acid",
  "lemonade",
  "winter",
  "bumblebee",
  "autumn",
  "cupcake",
  "valentine",
];
export const dark_themes = [
  "dark",
  "dracula",
  "night",
  "synthwave",
  "halloween",
  "forest",
  "luxury",
];
export let adaptive_style: Ref<"uniform" | "adaptive"> = ref("uniform");
export let theme = ref();
export let light_theme = ref();
export let dark_theme = ref();
export let theme_style_sheet = ref();

export const update_theme = (dom: HTMLElement) => {
  if (adaptive_style.value == "adaptive") {
    if (matchMedia("(prefers-color-scheme: light)").matches) {
      dom.setAttribute("data-theme", localStorage.getItem("light_theme")!);
    } else {
      dom.setAttribute("data-theme", localStorage.getItem("dark_theme")!);
    }
  } else {
    dom.setAttribute("data-theme", localStorage.getItem("theme")!);
  }

  // theme_style_sheet
  if (adaptive_style.value == "uniform") {
    if (dark_themes.includes(theme.value)) {
      theme_style_sheet.value = "dark";
    } else {
      theme_style_sheet.value = "light";
    }
  } else {
    if (matchMedia("(prefers-color-scheme: dark)").matches)
      theme_style_sheet.value = "dark";
    else {
      theme_style_sheet.value = "light";
    }
  }
};

export const change_new_theme = (new_theme: string) => {
  theme.value = new_theme;
  localStorage.setItem("theme", new_theme);

  // 如果有 iframe
  if (document.getElementsByTagName("iframe")[0]) {
    // 更新自身
    update_theme(document.documentElement);

    // 更新 iframe
    setTimeout(() => {
      (
        document
          .getElementsByTagName("iframe")[0]
          .contentDocument!.documentElement.getElementsByClassName(
            `theme_${new_theme}`
          )[0] as HTMLElement
      ).click();
    }, 100);
  } else {
    update_theme(document.documentElement);
  }
};

export const en_fonts = [
  "DM Serif Text",
  "Inter",
  "Lato",
  "Playfair Display",
  "Roboto",
  "Roboto Serif",
  "Roboto Slab",
  "Sen",
  "Ubuntu",
  "Vollkorn",
];
export const zh_fonts = ["霞鹜文楷", "思源宋体", "思源黑体"];
export let en_font = ref();
export let zh_font = ref();

export const update_font = () => {
  localStorage.setItem("--main_font", `${en_font.value}, ${zh_font.value}`);

  let root_style_setter = (
    document.querySelector(":root")! as unknown as HTMLElement
  ).style;

  root_style_setter.setProperty(
    "--main_font",
    `${en_font.value}, Segoe UI Emoji, ${zh_font.value}`
  );
};

export const init_config = () => {
  // locale
  let _locale: any = localStorage.getItem("locale");
  if (_locale) locale.value = _locale;
  else {
    localStorage.setItem("locale", "en");
    locale.value = "en";
  }

  // light_theme
  let _light_theme = localStorage.getItem("light_theme");
  if (_light_theme) light_theme.value = _light_theme;
  else {
    localStorage.setItem("light_theme", "emerald");
    light_theme.value = "emerald";
  }

  // dark_theme
  let _dark_theme = localStorage.getItem("dark_theme");
  if (_dark_theme) dark_theme.value = _dark_theme;
  else {
    localStorage.setItem("dark_theme", "dracula");
    dark_theme.value = "dracula";
  }

  // adaptive_style
  let _adaptive_style = localStorage.getItem("adaptive_style");
  // @ts-ignore
  if (_adaptive_style) adaptive_style.value = _adaptive_style;
  else {
    localStorage.setItem("adaptive_style", "uniform");
    adaptive_style.value = "uniform";
  }

  // theme
  let _theme = localStorage.getItem("theme");
  if (_theme) {
    theme.value = _theme;
  } else {
    localStorage.setItem("theme", "cupcake");
    theme.value = "cupcake";
  }

  update_theme(document.documentElement);

  // locale
  //@ts-ignore
  changeLocale(localStorage.getItem("locale") || "en");

  // en_font
  let _en_font = localStorage.getItem("en_font");
  if (_en_font) {
    en_font.value = _en_font;
  } else {
    localStorage.setItem("en_font", "Lato");
    en_font.value = "Lato";
  }

  // zh_font
  let _zh_font = localStorage.getItem("zh_font");
  if (_zh_font) {
    zh_font.value = _zh_font;
  } else {
    localStorage.setItem("zh_font", "思源黑体");
    zh_font.value = "思源黑体";
  }

  update_font();
};
