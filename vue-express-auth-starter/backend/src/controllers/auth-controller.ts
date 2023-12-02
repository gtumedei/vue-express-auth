import bcrypt from "bcrypt"
import { Request, Response } from "express"
import { decodeAccessToken, deleteAccessToken, setAccessToken } from "../utils/auth"
import { getConnection } from "../utils/db"

export const register = async (req: Request, res: Response) => {
  // Blocca la richiesta se l'utente ha già effettuato il login
  const user = decodeAccessToken(req, res)
  if (user) {
    res.status(403).send("Questa operazione richiede il logout.")
    return
  }

  // Estrae username e password dal body della richiesta
  const { username, password } = req.body

  // Verifica che l'username sia disponibile
  const connection = await getConnection()
  const [users] = await connection.execute<any[]>("SELECT username FROM users WHERE username=?", [
    username,
  ])
  if (users.length > 0) {
    res.status(400).send("Username già in uso.")
    return
  }

  // Crea l'hash della password per non salvarla in chiaro
  const passwordHash = await bcrypt.hash(password, 10)

  // Inserisce l'utente nel database
  await connection.execute("INSERT INTO users (username, password) VALUES (?, ?)", [
    username,
    passwordHash,
  ])

  // Estrae i dati per il nuovo utente
  const [results] = await connection.execute<any[]>(
    "SELECT id, username, role FROM users WHERE username=?",
    [username]
  )
  const newUser = results[0]

  // Crea un JWT contenente i dati dell'utente e lo imposta come cookie
  setAccessToken(req, res, newUser)

  res.json({ message: "Registrazione effettuata con successo" })
}

export const login = async (req: Request, res: Response) => {
  // Blocca la richiesta se l'utente ha già effettuato il login
  const user = decodeAccessToken(req, res)
  if (user) {
    res.status(403).send("Questa operazione richiede il logout.")
    return
  }

  // Estrae username e password dal body della richiesta
  const { username, password } = req.body

  // Esegue la query al database per ottenere i dati dell'utente in base allo username
  const connection = await getConnection()
  const [results] = await connection.execute(
    "SELECT id, username, password, role FROM users WHERE username=?",
    [username]
  )

  // Errore se l'utente non è stato trovato
  if (!Array.isArray(results) || results.length == 0) {
    res.status(400).send("Credenziali errate.")
    return
  }

  const userData = results[0] as any

  // Confronta l'hash della password fornita con quello nel database
  const passwordOk = await bcrypt.compare(password, userData.password)

  // Errore se la password è errata
  if (!passwordOk) {
    res.status(400).send("Credenziali errate.")
    return
  }

  // Importante! Rimuove la password dall'oggetto utente
  delete userData.password

  // Crea un JWT contenente i dati dell'utente e lo imposta come cookie
  setAccessToken(req, res, userData)

  res.json({ message: "Login effettuato con successo" })
}

export const logout = async (req: Request, res: Response) => {
  // Blocca la richiesta se l'utente non ha effettuato il login
  const user = decodeAccessToken(req, res)
  if (!user) {
    res.status(403).send("Questa operazione richiede l'autenticazione.")
    return
  }
  // Cancella il cookie contenente l'access token
  deleteAccessToken(req, res)
  res.json({ message: "Logout effettuato con successo" })
}

export const getProfile = async (req: Request, res: Response) => {
  // Decodifica il contenuto dell'access token, che contiene il dati dell'utente, e lo invia in risposta
  const user = decodeAccessToken(req, res)
  res.json(user)
}
