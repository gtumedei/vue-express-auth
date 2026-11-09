import { createConnection } from "mysql2/promise"

export const connection = await createConnection({
  host: "localhost",
  // Utilizzare variabili d'ambiente per le credenziali del database in progetti reali!
  user: "root",
  password: "",
  database: "vuepost",
})

// Versione senza async/await:

// import { createConnection } from "mysql2"

// export const connection = createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "vuepost",
// })
