import express from "express"
import { connectDb } from "./config/mongodb"
import cors from "cors"
import { PCRouter } from "./routes/PCRouter"
import { MotherboardRouter } from "./routes/MotherboardRouter"
import { DiscoRouter } from "./routes/DiscoRouter"
import { MemoriaRouter } from "./routes/MemoriaRouter"
import { authRouter } from "./routes/AuthRouter"

process.loadEnvFile()

const PORT = process.env.PORT

const server = express()

server.use(cors())
server.use(express.json())

server.get("/api", (req,res) => {
    res.json({status :true})
})

server.use("/api/PC", PCRouter )
server.use("/api/Motherboard", MotherboardRouter )
server.use("/api/Memoria", MemoriaRouter )
server.use("/api/Disco", DiscoRouter )

server.use ("/api/auth",authRouter)

server.use((req, res) => {
  res.json({ error: "No existe el recurso" })
})



server.listen(PORT,() => {
    connectDb()
    console.log(`✅ Servidor http con express en escucha por el puerto http://localhost:${PORT}`)
})