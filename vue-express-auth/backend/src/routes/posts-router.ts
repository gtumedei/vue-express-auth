import { Router } from "express"
import * as postsController from "../controllers/posts-controller"

const router = Router()

router.get("/api/posts", postsController.getAllPosts)
router.post("/api/posts", postsController.createPost)
router.delete("/api/posts/:id", postsController.deletePost)

export default router
