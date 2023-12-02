import axios from "axios"
import { createApp } from "vue"
import { createRouter, createWebHistory, Router } from "vue-router"
import App from "./app.vue"
import Home from "./pages/home.vue"
import Login from "./pages/login.vue"
import NotFound from "./pages/not-found.vue"
import Register from "./pages/register.vue"
import { User } from "./types"

import "./style.css"

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/login",
      component: Login,
      meta: { requireLogout: true }, // Segna che la rotta richiede il logout
    },
    {
      path: "/register",
      component: Register,
      meta: { requireLogout: true }, // Segna che la rotta richiede il logout
    },
    // Ipotetica rotta che richiede il login
    /* {
      path: "/new-post",
      component: Post,
      meta: { requireLogin: true },
    }, */
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
})

// Funzione che viene eseguita prima di ogni navigazione del router
router.beforeEach(async (to) => {
  const res = await axios.get("/api/auth/profile")
  const user = res.data as User | null
  // Se la pagina richiede il login, ma l'utente non l'ha effettuato, lo rimanda alla pagina di login
  if (to.meta.requireLogin && !user) {
    return { path: "/login" }
  }
  // Se la pagina richiede il logout, ma l'utente ha effettuato l'accesso, lo rimanda alla home
  if (to.meta.requireLogout && user) {
    return { path: "/" }
  }
})

createApp(App).use(router).mount("#app")
