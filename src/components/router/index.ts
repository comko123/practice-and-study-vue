import { createWebHistory, createRouter } from "vue-router"
import App from "../../App.vue"
import Main from "../main/index.vue"
import Detail from "../detail/index.vue"

const routes = [
  { path: "/", component: App },
  { path: "", component: Main },
  { path: "/detail/:id", component: Detail }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
