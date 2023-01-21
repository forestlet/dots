import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "normalize.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/style/element-plus.scss";
import "@/style/ink-mde.scss";
import "@/style/style.scss";
import { router } from "@/router/router";

createApp(App)
  .use(router)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
