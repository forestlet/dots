import { createRouter, createWebHashHistory } from 'vue-router'
import Setting from '@/pages/Setting.vue'
import Collection from '@/pages/Collection.vue'

const routes = [
  { path: '/', component: Collection },
  { path: '/setting', component: Setting },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
