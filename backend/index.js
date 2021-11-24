/*
    Esta página crea la conexion a la base de datos.
*/
import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import EscuelasDAO from "./dao/escuelasDAO.js"
import UsuariosDAO from "./dao/usuariosDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.TT_DB_URI,
  { //Variables de acceso
    maxPoolSize: 50,               //Número de conexiones aceptadas
    wtimeoutMS: 2500,             //Tiempo de request timeout
    useNewUrlParser: true }
  )
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {       //Despues de la conexión inicia el servidor web
    await EscuelasDAO.injectDB(client)
    await UsuariosDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`Servidor iniciado ${port}`)
    })
  })