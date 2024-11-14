<script lang="ts">
import { defineComponent } from "vue"
import UserInfo from "./components/user-info.vue"
import { User } from "./types"

export default defineComponent({
  components: { UserInfo },
  data() {
    return {
      user: null as User | null,
    }
  },
})
</script>

<template>
  <header class="flex items-center p-6">
    <RouterLink to="/" class="text-blue-500 font-bold">Vuepost</RouterLink>
    <div class="grow flex justify-end items-center gap-3">
      <UserInfo v-if="user" :user="user" />
      <template v-else>
        <RouterLink to="/login" class="btn">Login</RouterLink>
        <RouterLink to="/register" class="btn !bg-blue-500 text-white">Registrati</RouterLink>
      </template>
    </div>
  </header>
  <main class="grow py-6 border-y border-zinc-200 dark:border-zinc-700 mx-6">
    <RouterView />
  </main>
  <footer class="flex p-6">
    <RouterLink to="/" class="text-blue-500 font-bold m-auto">Vuepost</RouterLink>
  </footer>
</template>
