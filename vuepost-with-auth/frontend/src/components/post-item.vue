<script lang="ts">
import { PropType, defineComponent } from "vue"
import { Post } from "../types"
import axios from "axios"

export default defineComponent({
  props: {
    post: Object as PropType<Post>,
    canDelete: Boolean,
  },
  emits: ["delete"],
  methods: {
    async deletePost() {
      await axios.delete(`/api/posts/${this.post?.id}`)
      this.$emit("delete")
    },
  },
})
</script>

<template>
  <div class="px-4 rounded-lg border border-zinc-200 dark:border-zinc-700">
    <p class="text-sm">
      {{ post?.username }} • {{ new Date(post?.publishedAt ?? "").toLocaleDateString() }}
    </p>
    <p>
      {{ post?.content }}
    </p>
    <div v-if="canDelete" class="not-prose flex justify-end gap-2 mb-5">
      <button class="btn" @click="deletePost">Elimina post</button>
    </div>
  </div>
</template>
