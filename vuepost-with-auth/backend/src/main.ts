import bodyParser from "body-parser"
import history from "connect-history-api-fallback"
import cookieParser from "cookie-parser"
import express from "express"
import helmet from "helmet"

import authRouter from "./routes/auth-router"
import postsRouter from "./routes/posts-router"

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())

app.use(helmet())

app.use(authRouter)
app.use(postsRouter)

app.use(history())
app.use(express.static("dist-frontend"))

app.use((_, res) => {
  res.setHeader("Content-Type", "text/plain")
  res.status(404).send("Ops... Pagina non trovata")
})

const port = 3000
app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
