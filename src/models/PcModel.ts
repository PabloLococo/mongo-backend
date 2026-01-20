import {Document, Model, Schema, model} from "mongoose";
import { IDisco,DiscoSchema } from "./DiscoModel";
import { IMemoria,MemoriaSchema } from "./Memoria";
import { IMotherboard,MotherboardSchema } from "./MotherboardModel";

interface IPc extends Document  {
    Disco : IDisco
    Memoria : IMemoria
    Motherboard : IMotherboard
    createdAt?: Date
    updatedAt?: Date
}

const PcSchema = new Schema<IPc>({
    Disco: {type:DiscoSchema, required: true},
    Memoria: {type:MemoriaSchema, required: true},
    Motherboard: {type:MotherboardSchema, required: true}
},{
    versionKey: false,
    timestamps: true
})

const Pc : Model<IPc> = model<IPc>("PC", PcSchema)

export { Pc }