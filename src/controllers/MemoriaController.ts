import {Request, Response} from "express"
import { Memoria } from "../models/Memoria"

const getMemorias = async (req: Request, res: Response) => {
    try
    {
        const memorias = await Memoria.find()
        res.json(memorias)
    } catch (error) {
        res.status(500).json ({success: false, error: "Error al obtener las memorias"})
    }
}
const addnewMemoria = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const newPC = await Memoria.create(body)
        res.status(201).json({ success: true, data: newPC })
    } catch (error) {
        const e = error as Error
        console.log(e)
        res.status(400).json({ success: false, error: e.name })
    }
}
const updateMemoria = async (req: Request, res: Response) => {
    try {
        const { body: updates } = req
        const { id } = req.params
        const updatedPc = await Memoria.findByIdAndUpdate(id, updates, { new: true })
        if (!updatedPc) {
            return res.status(404).json({
                succes: false,
                error: "No existe el PC "
            })
        }
        res.json({
            sFuccess: true,
            data: updatedPc
        })
    } catch (error) {
        const e = error as Error
        res.status(400).json({ success: false, error: e.name })
    }
}
export {getMemorias,updateMemoria, addnewMemoria}