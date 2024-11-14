<script lang="ts">
import axios from "axios"
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
    }
  },
  methods: {
    async onSubmit() {
      if (this.password != this.confirmPassword) {
        alert("Le due password non coincidono.")
        return
      }
      try {
        await axios.post("/api/auth/register", {
          username: this.username,
          password: this.password,
        })
        location.href = "/"
      } catch (e: any) {
        if (e.response) {
          alert(`${e.response.status} - ${e.response.statusText}\n${e.response.data}`)
        } else {
          alert(e.message)
        }
      }
    },
  },
})
</script>

<template>
  <div class="prose dark:prose-invert">
    <h1>Registrazione</h1>
    <form class="not-prose flex flex-col gap-3" @submit.prevent="onSubmit">
      <input
        type="text"
        v-model="username"
        class="rounded-lg bg-transparent border-zinc-200 dark:border-zinc-700"
        placeholder="Username"
      />
      <input
        type="password"
        v-model="password"
        class="rounded-lg bg-transparent border-zinc-200 dark:border-zinc-700"
        placeholder="Password"
      />
      <input
        type="password"
        v-model="confirmPassword"
        class="rounded-lg bg-transparent border-zinc-200 dark:border-zinc-700"
        placeholder="Conferma password"
      />
      <button type="submit" class="btn !bg-blue-500 text-white w-1/2 mx-auto mt-3">
        Registrati
      </button>
    </form>
  </div>
</template>
