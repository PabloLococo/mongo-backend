import { Request, Response } from "express"
import { Motherboard } from "../models/MotherboardModel"

const getMotherboards = async (req: Request, res: Response) => {
    try {
        const motherboard = await Motherboard.find()
        res.json(motherboard)
    } catch (error) {
        res.status(500).json({ success: false, error: "Error al obtener los motehrboard" })
    }
}
const addnewMotherboard = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const newPC = await Motherboard.create(body)
        res.status(201).json({ success: true, data: newPC })
    } catch (error) {
        const e = error as Error
        console.log(e)
        res.status(400).json({ success: false, error: e.name })
    }
}

const updateMotherboards = async (req: Request, res: Response) => {
    try {
        const { body: updates } = req
        const { id } = req.params
        const updatedPc = await Motherboard.findByIdAndUpdate(id, updates, { new: true })
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
export { getMotherboards, updateMotherboards,addnewMotherboard }