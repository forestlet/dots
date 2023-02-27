import "bootstrap-icons/font/bootstrap-icons.scss";
import "normalize.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/style/element-plus.scss";
import "@/style/ink-mde.scss";
import "@/style/style.scss";

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "@/router/router";
import { i18n } from "@/i18n/i18n";

createApp(App)
  .use(router)
  .use(i18n)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
