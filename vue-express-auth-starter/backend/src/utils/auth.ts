import { Request, Response } from "express"

// Campi da inserire nell'access token
interface User {
  id: number
  username: string
  role: "admin" | "user"
}

const JWT_SECRET = "foo"
const COOKIE_NAME = "access-token"

/**
 * Codifica l'utente in un access token e lo imposta come cookie.
 * Usato in fase di registrazione e login.
 */
export const setAccessToken = (req: Request, res: Response, user: any) => {}

/**
 * Decodifica l'access token, ottenendo l'utente.
 * Usato per verificare se l'utente ha effettuato il login.
 */
export const decodeAccessToken = (req: Request, res: Response) => {}

/**
 * Cancella il cookie contente l'access token.
 * Usato per effettuare il logout.
 */
export const deleteAccessToken = (req: Request, res: Response) => {}
