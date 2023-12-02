import { createApp } from "vue"
import { createRouter, createWebHistory, Router } from "vue-router"
import App from "./app.vue"
import Home from "./pages/home.vue"
import Login from "./pages/login.vue"
import NotFound from "./pages/not-found.vue"
import Register from "./pages/register.vue"

import "./style.css"

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
})

createApp(App).use(router).mount("#app")
