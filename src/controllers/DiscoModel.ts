import {Request, Response} from "express"
import { Disco } from "../models/DiscoModel"

const getDiscos = async (req: Request, res: Response) => {
    try
    {
        const discos = await Disco.find()
        res.json(discos)
    } catch (error) {
        res.status(500).json ({success: false, error: "Error al obtener los discos"})
    }
}

const addnewDisco = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const newPC = await Disco.create(body)
        res.status(201).json({ success: true, data: newPC })
    } catch (error) {
        const e = error as Error
        console.log(e)
        res.status(400).json({ success: false, error: e.name })
    }
}

const updateDisco = async (req: Request, res: Response) => {
    try {
        const { body: updates } = req
        const { id } = req.params
        const updatedPc = await Disco.findByIdAndUpdate(id, updates, { new: true })
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
export {getDiscos,updateDisco,addnewDisco}