import { createRouter, createWebHashHistory } from "vue-router";
import About from "@/pages/About.vue";
import Collection from "@/pages/Collection.vue";

const routes = [
  { path: "/", component: Collection },
  { path: "/about", component: About },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
