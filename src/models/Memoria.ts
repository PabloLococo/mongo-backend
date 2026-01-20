import {Document, Model, Schema, model} from "mongoose";

interface IMemoria extends Document {
    marca: string
    modelo: string
    tipo: string
    frecuencia: number
    capacidad_gb: number
}

const MemoriaSchema = new Schema<IMemoria>({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    tipo: { type: String, required: true },
    frecuencia: { type: Number, min:0 },
    capacidad_gb: { type: Number, min:0 },
},{
    versionKey: false,
    timestamps: false
})

const Memoria : Model<IMemoria> = model<IMemoria>("Memoria",MemoriaSchema )

export{IMemoria, MemoriaSchema, Memoria}
