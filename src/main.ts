import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "@/style/element_plus.scss";
import "@/style/style.scss";

createApp(App)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
