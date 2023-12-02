export interface User {
  id: number
  username: string
  role: "admin" | "user"
}

export interface Post {
  id: number
  content: string
  publishedAt: string
  username: string
}
