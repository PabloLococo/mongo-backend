import {Document, Model, Schema, model} from "mongoose";

interface IDisco extends Document {
    marca: string
    modelo: string
    tipo: string
    capacidad_gb: number
}

const DiscoSchema = new Schema<IDisco>({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    tipo: { type: String, required: true },
    capacidad_gb: { type: Number, min:0},
})

const Disco : Model<IDisco> = model<IDisco>("Disco",DiscoSchema)

export {IDisco,DiscoSchema,Disco}