import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "normalize.css";
import "@/style/element-plus.scss";
import "@/style/ink-mde.scss";
import "@/style/style.scss";

createApp(App)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
