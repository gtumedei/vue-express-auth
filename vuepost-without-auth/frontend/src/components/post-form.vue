<script lang="ts">
import axios from "axios"
import { defineComponent } from "vue"

export default defineComponent({
  emits: ["submit"],
  data() {
    return {
      content: "",
    }
  },
  computed: {
    canSubmit() {
      return this.content != ""
    },
  },
  methods: {
    async onSubmit() {
      if (!this.canSubmit) return
      await axios.post("/api/posts", {
        content: this.content,
      })
      this.content = ""
      this.$emit("submit")
    },
  },
})
</script>

<template>
  <form class="not-prose flex relative mb-10" @submit.prevent="onSubmit">
    <textarea
      ref="textarea"
      v-model="content"
      placeholder="Scrivi quello che vuoi..."
      class="h-44 w-full px-5 pt-4 pb-20 rounded-lg bg-transparent border-zinc-200 dark:border-zinc-700"
    />
    <button
      type="submit"
      class="btn bg-blue-500! text-white disabled:!bg-zinc-100 dark:disabled:!bg-zinc-800 disabled:!text-zinc-300 dark:disabled:!text-zinc-600 absolute bottom-5 right-5"
      :disabled="!canSubmit"
    >
      Posta
    </button>
  </form>
</template>
