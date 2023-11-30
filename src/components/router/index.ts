import { createWebHistory, createRouter } from "vue-router"
import App from "../../App.vue"
import Main from "../main/index.vue"

const routes = [
  { path: "/", component: App },
  { path: "", component: Main }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
