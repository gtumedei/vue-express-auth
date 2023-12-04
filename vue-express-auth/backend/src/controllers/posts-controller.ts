import { Request, Response } from "express"
import { getConnection } from "../utils/db"
import { decodeAccessToken } from "../utils/auth"

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
  // Verifica che l'utente abbia effettuato il login
  const user = decodeAccessToken(req, res)
  if (!user) {
    res.status(403).send("Questa operazione richiede l'autenticazione.")
    return
  }

  const conn = await getConnection()
  await conn.execute("INSERT INTO posts (content, authorId) VALUES (?, ?)", [
    req.body.content,
    user.id,
  ])
  res.json({ success: true })
}

export const deletePost = async (req: Request, res: Response) => {
  // Verifica che l'utente abbia effettuato il login
  const user = decodeAccessToken(req, res)
  if (!user) {
    res.status(403).send("Questa operazione richiede l'autenticazione.")
    return
  }

  const conn = await getConnection()

  // Verifica che il post esista
  const [posts] = await conn.execute<any[]>("SELECT * FROM posts WHERE id=?", [req.params.id])
  if (posts.length == 0) {
    res.status(404).send("Post non trovato.")
    return
  }
  // Verifica che l'utente abbia i permessi per eliminare il post
  const post = posts[0]
  if (post.authorId != user.id && user.role != "admin") {
    res.status(403).send("Non hai i permessi per eliminare questo post.")
    return
  }

  await conn.execute("DELETE FROM posts WHERE id=?", [req.params.id])
  res.json({ success: true })
}
