import "bootstrap-icons/font/bootstrap-icons.scss";
import "normalize.css";
import "@/style/tailwind.css";
import "@/style/ink-mde.scss";
import "@/style/style.scss";

import { createApp } from "vue";
import { router } from "@/router/router";
import { i18n } from "@/i18n/i18n";

import App from "./App.vue";

createApp(App)
  .use(router)
  .use(i18n)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
