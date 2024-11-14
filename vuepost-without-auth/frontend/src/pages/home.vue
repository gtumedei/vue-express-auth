<script lang="ts">
import axios from "axios"
import { defineComponent } from "vue"
import PostForm from "../components/post-form.vue"
import PostItem from "../components/post-item.vue"
import { Post } from "../types"

export default defineComponent({
  components: { PostForm, PostItem },
  data() {
    return {
      posts: [] as Post[],
    }
  },
  methods: {
    async getPosts() {
      const res = await axios.get("/api/posts")
      this.posts = res.data
    },
  },
  mounted() {
    this.getPosts()
  },
})
</script>

<template>
  <div class="prose dark:prose-invert">
    <PostForm @submit="getPosts" />
    <h1>Gli ultimi post</h1>
    <div v-if="posts.length > 0" class="flex flex-col gap-6">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :canDelete="true"
        @delete="getPosts"
      />
    </div>
    <div v-else>
      <p>Nessun post da visualizzare.</p>
    </div>
  </div>
</template>
