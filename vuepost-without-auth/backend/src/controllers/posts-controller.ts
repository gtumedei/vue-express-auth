import { Request, Response } from "express"
import { connection } from "../utils/db"

export const getAllPosts = async (req: Request, res: Response) => {
  const [posts] = await connection.execute(
    `SELECT posts.id as id, content, publishedAt, username
     FROM posts
     LEFT OUTER JOIN users ON posts.authorId=users.id
     ORDER BY publishedAt DESC`
  )
  res.json(posts)
}

export const createPost = async (req: Request, res: Response) => {
  await connection.execute("INSERT INTO posts (content, authorId) VALUES (?, ?)", [
    req.body.content,
    0,
  ])
  res.json({ success: true })
}

export const deletePost = async (req: Request, res: Response) => {
  // Verifica che il post esista
  const [posts] = await connection.execute("SELECT * FROM posts WHERE id=?", [req.params.id])
  if (!Array.isArray(posts) || posts.length == 0) {
    res.status(404).send("Post non trovato.")
    return
  }

  await connection.execute("DELETE FROM posts WHERE id=?", [req.params.id])
  res.json({ success: true })
}
