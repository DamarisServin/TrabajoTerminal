/*
    Inicialización del servidor
*/
import express from "express"
import cors from "cors"
import colecciones from "./api/colecciones.route.js"

const app = express()

app.use(cors())                     
app.use(express.json())         

//Rutas del servidor
app.use("/api/colecciones", colecciones)
app.use("*", (req, res) => res.status(404).json({ error: "Not Found"}))

export default app