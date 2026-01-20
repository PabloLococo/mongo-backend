import {Document, Model, Schema, model} from "mongoose";

interface IMotherboard extends Document {
    marca: string
    modelo: string
    socket : string
    tipo_memoria: string
    max_frecuencia: number
}

const MotherboardSchema = new Schema<IMotherboard>({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    socket : { type: String, default: "Sin Información" },
    tipo_memoria: { type: String,default: "Sin Información" },
    max_frecuencia: { type: Number, min:0},
},{
    versionKey: false,
    timestamps: false
})

const Motherboard: Model<IMotherboard> = model<IMotherboard>("Motherboard", MotherboardSchema)

export{IMotherboard,MotherboardSchema,Motherboard}