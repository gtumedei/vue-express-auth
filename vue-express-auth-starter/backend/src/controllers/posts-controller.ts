import { Request, Response } from "express"
import { getConnection } from "../utils/db"

export const getAllPosts = async (req: Request, res: Response) => {
  const conn = await getConnection()
  const [posts] = await conn.execute(
    `SELECT posts.id as id, content, publishedAt, username
     FROM posts
     LEFT OUTER JOIN users ON posts.authorId=users.id
     ORDER BY publishedAt DESC`
  )
  res.json(posts)
}

export const createPost = async (req: Request, res: Response) => {
  const conn = await getConnection()
  await conn.execute("INSERT INTO posts (content, authorId) VALUES (?, ?)", [req.body.content, 0])
  res.json({ success: true })
}

export const deletePost = async (req: Request, res: Response) => {
  const conn = await getConnection()

  // Verifica che il post esista
  const [posts] = await conn.execute<any[]>("SELECT * FROM posts WHERE id=?", [req.params.id])
  if (posts.length == 0) {
    res.status(404).send("Post non trovato.")
    return
  }

  await conn.execute("DELETE FROM posts WHERE id=?", [req.params.id])
  res.json({ success: true })
}
