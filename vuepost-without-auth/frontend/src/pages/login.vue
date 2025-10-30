<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    async onSubmit() {},
  },
})
</script>

<template>
  <div class="prose dark:prose-invert">
    <h1>Login</h1>
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
      <button type="submit" class="btn bg-blue-500! text-white w-1/2 mx-auto mt-3">Accedi</button>
    </form>
  </div>
</template>
