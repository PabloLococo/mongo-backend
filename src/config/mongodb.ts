import mongoose from "mongoose"

process.loadEnvFile()

const connectDb = async () =>{
    const URI_DB = process.env.URI_DB as string
    console.log(URI_DB)
    try {
    await mongoose.connect(URI_DB)
    console.log("✅ Conectado con éxito a mongo db")
  } catch (e) {
    console.log(e)
    console.log("❌ Error al conectarse a la base de datos")
  }
}

export {connectDb}