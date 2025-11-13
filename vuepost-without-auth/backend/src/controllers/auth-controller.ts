import { Request, Response } from "express"
import { User } from "../utils/auth"
import { connection } from "../utils/db"

export const register = async (req: Request, res: Response) => {
  // Estrae username e password dal body della richiesta
  const { username, password } = req.body

  // Inserisce l'utente nel database
  await connection.execute("INSERT INTO users (username, password) VALUES (?, ?)", [
    username,
    password,
  ])

  // Estrae i dati del nuovo utente
  const [results] = await connection.execute(
    "SELECT id, username, role FROM users WHERE username=?",
    [username]
  )
  const newUser = (results as User[])[0]

  res.json({ message: "Registrazione effettuata con successo" })
}

export const login = async (req: Request, res: Response) => {
  // Estrae username e password dal body della richiesta
  const { username, password } = req.body

  // Esegue la query al database per ottenere i dati dell'utente in base allo username
  const [results] = await connection.execute(
    "SELECT id, username, password, role FROM users WHERE username=?",
    [username]
  )

  res.json({ message: "Login effettuato con successo" })
}

export const logout = async (req: Request, res: Response) => {
  res.json({ message: "Logout effettuato con successo" })
}

export const getProfile = async (req: Request, res: Response) => {
  res.json({})
}
