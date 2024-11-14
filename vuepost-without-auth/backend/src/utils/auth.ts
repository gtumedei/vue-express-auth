import { Request, Response } from "express"

// Campi da inserire nell'access token
export interface User {
  id: number
  username: string
  role: "admin" | "user"
}

// Utilizzare una variabile d'ambiente per il secret in progetti reali!
// E anche un secret più complesso.
const JWT_SECRET = "foo"
const COOKIE_NAME = "vuepost-access-token"

/**
 * Codifica l'utente in un access token e lo imposta come cookie.
 * Usato in fase di registrazione e login.
 */
export const setUser = (req: Request, res: Response, user: any) => {}

/**
 * Decodifica e verifica l'access token, restituendo l'utente.
 * Usato per verificare se l'utente ha effettuato il login.
 */
export const getUser = (req: Request, res: Response) => {}

/**
 * Cancella il cookie contente l'access token.
 * Usato per effettuare il logout.
 */
export const unsetUser = (req: Request, res: Response) => {}
