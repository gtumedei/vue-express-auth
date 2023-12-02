import { Request, Response } from "express"

export const register = async (req: Request, res: Response) => {
  res.json({ message: "Registrazione effettuata con successo" })
}

export const login = async (req: Request, res: Response) => {
  res.json({ message: "Login effettuato con successo" })
}

export const logout = async (req: Request, res: Response) => {
  res.json({ message: "Logout effettuato con successo" })
}

export const getProfile = async (req: Request, res: Response) => {
  res.json({})
}
