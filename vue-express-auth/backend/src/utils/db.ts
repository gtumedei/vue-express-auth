import mysql, { Connection } from "mysql2/promise"

let conn: Connection | null = null

export const getConnection = async () => {
  if (!conn) {
    conn = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "vuepost",
    })
  }
  return conn
}

// Versione senza async/await:

// import mysql from "mysql2"

// export const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "vuepost",
// })
