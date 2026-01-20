import {Request, Response} from "express"
import { Pc } from "../models/PcModel"
import { Motherboard } from "../models/MotherboardModel"
import { Disco } from "../models/DiscoModel"
import { Memoria } from "../models/Memoria"

const getPCs = async (req: Request, res: Response) => {
    try
    {
        const pc = await Pc.find()
        res.json(pc)
    } catch (error) {
        res.status(500).json ({success: false, error: "Error al obtener los pc"})
    }
}

const addnewPC = async (req:Request, res:Response) =>{
    try {
        const {body} = req
        console.log(body)
        const motherboard = await Motherboard.findOne(body.Motherboard)     
        const disco = await Disco.findOne(body.Disco)
        const memoria = await Memoria.findOne(body.Memoria)   
        if (motherboard && disco && memoria)
        {
            const newPC = await Pc.create(body)
            res.status(201).json({success:true,data: newPC})
        }
        else{
            res.status(404).json({success:false,error:"Datos incorrectos"})
        }
    } catch (error) {
        const e = error as Error
        console.log(e)
        res.status(400).json({success:false,error:e.name})
    }
}
const updatePC = async (req:Request, res:Response) =>{
    try {
        const {body: updates} = req
        const motherboard = await Motherboard.findOne(updates.Motherboard)     
        const disco = await Disco.findOne(updates.Disco)
        const memoria = await Memoria.findOne(updates.Memoria)
        const {id} = req.params
        if (motherboard && disco && memoria)
        {
            const updatedPc = await Pc.findByIdAndUpdate(id,updates, {new:true})
            if(!updatedPc){
              return res.status(404).json({
              succes:false,
              error: "No existe el PC "
            })
            }
            res.json({
              success:true,
              data:updatedPc
            })
        }
         else{
            res.status(404).json({success:false,error:"Datos incorrectos"})
        }
    } catch (error) {
        const e = error as Error
        res.status(400).json({success:false,error:e.name})
    }
}

const deletePC = async( req:Request, res:Response) =>{
try {
    const {id} = req.params
    const deletePC = await Pc.findByIdAndDelete(id)
    if (!deletePC){
        return res.status(404).json({success:false,error:"No existe la PC"})
    }
    res.json({success : true, data:deletePC})
} catch (error) {
    const e = error as Error
    res.status(400).json({success:false, error: e.name})
}
}



export {getPCs,addnewPC,updatePC,deletePC}